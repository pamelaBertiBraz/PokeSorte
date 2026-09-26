import logoPokeSorte from '../assets/logo-pokesorte.png'
import BoosterPack from '../components/BoosterPack.jsx'

export default function DrawPage() {
  return (
    <main className="draw-page">
      <img
        className="draw-logo"
        src={logoPokeSorte}
        alt="PokeSorte"
      />

      <section
        className="packs"
        aria-label="Escolha um pacote"
      >
        {[1, 2, 3].map((number) => (
          <BoosterPack
            key={number}
            index={number}
          />
        ))}
      </section>
    </main>
  )
}
