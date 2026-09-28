import './Album.css'
import { useMemo, useState } from 'react'
import PokemonCard from '../PokemonCard.jsx'

const CARTAS_VAZIAS = []

function filtrarCartas(cartas, busca, tipo) {
  const nomeBuscado = busca.trim().toLocaleLowerCase('pt-BR')

  return cartas.filter((carta) =>
    carta.nome.toLocaleLowerCase('pt-BR').includes(nomeBuscado)
    && (tipo === '' || carta.tipos.includes(tipo)),
  )
}

export default function Album({ cartas = CARTAS_VAZIAS }) {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('')

  const tiposDisponiveis = useMemo(
    () => [...new Set(cartas.flatMap((carta) => carta.tipos))]
      .sort((primeiro, segundo) => primeiro.localeCompare(segundo, 'pt-BR')),
    [cartas],
  )

  const cartasEncontradas = useMemo(
    () => filtrarCartas(cartas, busca, tipo),
    [cartas, busca, tipo],
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
      </div>

      <section className="album-page__collection" aria-label="Cartas do álbum">
        {cartas.length === 0 ? (
          <p className="album-page__empty">
            Seu álbum está vazio. Sorteie uma carta para começar sua coleção.
          </p>
        ) : cartasEncontradas.length === 0 ? (
          <p>Nenhuma carta encontrada para essa busca.</p>
        ) : (
          <ul className="album-page__list">
            {cartasEncontradas.map((carta) => (
              <li key={carta.id}>
                <PokemonCard pokemon={carta} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}