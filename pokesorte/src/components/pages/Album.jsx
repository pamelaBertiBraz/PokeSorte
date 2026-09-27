import { useState } from 'react'

const CARTAS_VAZIAS = []

export default function Album({ cartas = CARTAS_VAZIAS }) {
  const [busca, setBusca] = useState('')
  const nomeBuscado = busca.trim().toLocaleLowerCase('pt-BR')
  const cartasEncontradas = cartas.filter((carta) =>
    carta.nome.toLocaleLowerCase('pt-BR').includes(nomeBuscado),
  )

  return (
    <main className="album-page">
      <header className="album-page__header">
        <h1>Meu álbum Pokémon</h1>
        <p>As cartas que você conseguir no sorteio aparecerão aqui.</p>
      </header>

      <div className="album-page__filtros">
        <label htmlFor="album-search">Buscar por nome</label>
        <input
          id="album-search"
          type="search"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
      </div>

      <section className="album-page__colecao" aria-label="Cartas do álbum">
        {cartas.length === 0 ? (
          <p className="album-page__vazio">
            Seu álbum está vazio. Sorteie uma carta para começar sua coleção.
          </p>
        ) : cartasEncontradas.length === 0 ? (
          <p>Nenhuma carta encontrada para essa busca.</p>
        ) : (
          <ul className="album-page__lista">
            {cartasEncontradas.map((carta) => (
              <li key={carta.id}>{carta.nome}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
