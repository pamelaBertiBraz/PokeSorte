import './Album.css'
import { useEffect, useMemo, useState } from 'react'
import PokemonCard from '../PokemonCard.jsx'
import { getPokemon } from '../../services/pokeApi.js'

const CARTAS_VAZIAS = []
const FAVORITOS_KEY = 'pokesorte-favoritos'

function carregarFavoritos() {
  try {
    const salvos = JSON.parse(localStorage.getItem(FAVORITOS_KEY) || '[]')
    return Array.isArray(salvos)
      ? [...new Set(salvos.filter((id) => Number.isInteger(id) && id > 0))]
      : []
  } catch {
    return []
  }
}

function filtrarCartas(cartas, busca, tipo, somenteFavoritas, favoritos) {
  const nomeBuscado = busca.trim().toLocaleLowerCase('pt-BR')

  return cartas.filter((carta) =>
    carta.nome.toLocaleLowerCase('pt-BR').includes(nomeBuscado)
    && (tipo === '' || carta.obtida?.tipos.includes(tipo))
    && (!somenteFavoritas || (carta.obtida && favoritos.has(carta.id))),
  )
}

export default function Album({ cartas = CARTAS_VAZIAS }) {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('')
  const [somenteFavoritas, setSomenteFavoritas] = useState(false)
  const [favoritos, setFavoritos] = useState(carregarFavoritos)
  const [catalogo, setCatalogo] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    let ativo = true

    getPokemon()
      .then(({ results }) => {
        if (ativo) {
          setCatalogo(results.map((pokemon) => ({
            id: Number(pokemon.url.split('/').filter(Boolean).pop()),
            nome: pokemon.name,
          })).sort((primeiro, segundo) => primeiro.id - segundo.id))
        }
      })
      .catch((error) => {
        if (ativo) setErro(error.message)
      })
      .finally(() => {
        if (ativo) setCarregando(false)
      })

    return () => { ativo = false }
  }, [])

  const cartasDoAlbum = useMemo(() => {
    const obtidasPorId = new Map(cartas.map((carta) => [carta.id, carta]))

    return catalogo.map((pokemon) => ({
      ...pokemon,
      obtida: obtidasPorId.get(pokemon.id),
    }))
  }, [catalogo, cartas])

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos))
    } catch {
      // evita falha quando o navegador bloqueia o armazenamento
    }
  }, [favoritos])

  const favoritosSet = useMemo(() => new Set(favoritos), [favoritos])

  function alternarFavorito(id) {
    setFavoritos((atuais) => atuais.includes(id)
      ? atuais.filter((favorito) => favorito !== id)
      : [...atuais, id])
  }

  const tiposDisponiveis = useMemo(
    () => [...new Set(cartas.flatMap((carta) => carta.tipos))]
      .sort((primeiro, segundo) => primeiro.localeCompare(segundo, 'pt-BR')),
    [cartas],
  )

  const cartasEncontradas = useMemo(
    () => filtrarCartas(cartasDoAlbum, busca, tipo, somenteFavoritas, favoritosSet),
    [cartasDoAlbum, busca, tipo, somenteFavoritas, favoritosSet],
  )

  return (
    <main className="album-page">
      <header className="album-page__header">
        <h1>Meu álbum Pokémon</h1>
        <p>As cartas que você conseguir no sorteio aparecerão aqui.</p>
      </header>

      <div className="album-page__filters">
        <label htmlFor="album-search">Buscar por nome</label>
        <input
          id="album-search"
          type="search"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Digite o nome do Pokémon"
        />

        <label htmlFor="album-type">Filtrar por tipo</label>
        <select
          id="album-type"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
        >
          <option value="">Todos os tipos</option>
          {tiposDisponiveis.map((tipoDisponivel) => (
            <option key={tipoDisponivel} value={tipoDisponivel}>
              {tipoDisponivel}
            </option>
          ))}
        </select>

        <label className="album-page__favorites-filter" htmlFor="album-favorites">
          <input
            id="album-favorites"
            type="checkbox"
            checked={somenteFavoritas}
            onChange={(event) => setSomenteFavoritas(event.target.checked)}
          />
          Somente favoritas
        </label>
      </div>

      <section className="album-page__collection" aria-label="Cartas do álbum">
        {carregando ? (
          <p>Carregando álbum...</p>
        ) : erro ? (
          <p role="alert">Não foi possível carregar o álbum: {erro}</p>
        ) : cartasEncontradas.length === 0 ? (
          <p>Nenhuma carta encontrada com esses filtros.</p>
        ) : (
          <ul className="album-page__list">
            {cartasEncontradas.map((carta) => (
              <li key={carta.id}>
                <PokemonCard pokemon={carta.obtida || carta} bloqueado={!carta.obtida} />
                {carta.obtida && (
                  <button
                    className="album-page__favorite-button"
                    type="button"
                    aria-label={`${favoritosSet.has(carta.id) ? 'Remover' : 'Adicionar'} ${carta.nome} ${favoritosSet.has(carta.id) ? 'dos' : 'aos'} favoritos`}
                    aria-pressed={favoritosSet.has(carta.id)}
                    onClick={() => alternarFavorito(carta.id)}
                  >
                    <span aria-hidden="true">{favoritosSet.has(carta.id) ? '★' : '☆'}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
