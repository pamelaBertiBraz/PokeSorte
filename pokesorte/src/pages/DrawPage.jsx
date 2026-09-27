import { useState } from 'react'
import logoPokeSorte from '../assets/logo-pokesorte.png'
import BoosterPack from '../components/BoosterPack.jsx'
import PokemonCard from '../components/PokemonCard.jsx'
import { getPokemonDetails } from '../services/pokeApi.js'
import './DrawPage.css'

export default function DrawPage() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function drawPokemon() {
    setLoading(true)
    setError('')

    try {
      const randomId = Math.floor(Math.random() * 151) + 1
      const result = await getPokemonDetails(randomId)

      setPokemon(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function resetDraw() {
    setPokemon(null)
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
      ) : pokemon ? (
        <section className="result-area">
          <PokemonCard pokemon={pokemon} />

          <button
            className="back-button"
            type="button"
            onClick={resetDraw}
          >
            Abrir outra carta
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
              onClick={drawPokemon}
            />
          ))}
        </section>
      )}
    </main>
  )
}
