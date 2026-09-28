import { useState } from 'react'
import logoPokeSorte from '../../assets/logo-pokesorte.png'
import BoosterPack from '../BoosterPack.jsx'
import PokemonCard from '../PokemonCard.jsx'
import { getPokemonDetails } from '../../services/pokeApi.js'
import './DrawPage.css'

export default function DrawPage() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function drawPokemons() {
    setLoading(true)
    setError('')

    try {
      const ids = new Set()

      while (ids.size < 1) {
        const randomId = Math.floor(Math.random() * 151) + 1
        ids.add(randomId)
      }

      const results = await Promise.all(
        [...ids].map((id) => getPokemonDetails(id)),
      )

      setPokemons(results)
    } catch (err) {
      setPokemons([])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function resetDraw() {
    setPokemons([])
    setError('')
  }

  return (
    <main className="draw-page">
      <img
        className="draw-logo"
        src={logoPokeSorte}
        alt="PokeSorte"
      />

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {loading ? (
        <section
          className="opening"
          aria-live="polite"
        >
          <div className="spinner" />
          <p>Abrindo o pacote...</p>
        </section>
      ) : pokemons.length > 0 ? (
        <section className="result-area">
          <div
            className="drawn-cards"
            aria-label="Cartas sorteadas"
          >
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.numero}
                pokemon={pokemon}
              />
            ))}
          </div>

          <button
            className="back-button"
            type="button"
            onClick={resetDraw}
          >
            Abrir outro pacote
          </button>
        </section>
      ) : (
        <section
          className="packs"
          aria-label="Escolha um pacote"
        >
          {[1, 2, 3].map((number) => (
            <BoosterPack
              key={number}
              index={number}
              onClick={drawPokemons}
            />
          ))}
        </section>
      )}
    </main>
  )
}
