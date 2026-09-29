import pacotePokeSorte from '../assets/pacote-pokesorte.png'

export default function BoosterPack({ index, onClick }) {
  return (
    <button
      className="booster-pack"
      type="button"
      onClick={onClick}
      aria-label={`Abrir pacote surpresa ${index}`}
    >
      <img
        src={pacotePokeSorte}
        alt="Pacote surpresa PokeSorte"
      />
    </button>
  )
}
