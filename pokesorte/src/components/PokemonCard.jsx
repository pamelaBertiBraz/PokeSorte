import StatBar from './StatBar.jsx'

const typeColors = {
  Água: '#4592c4',
  Fogo: '#f08030',
  Grama: '#65b95c',
  Elétrico: '#e5bd22',
  Psíquico: '#e35a88',
  Gelo: '#70c9c9',
  Dragão: '#6f55c7',
  Sombrio: '#635448',
  Fada: '#d879a1',
  Normal: '#92999d',
  Lutador: '#b4443b',
  Voador: '#849ad2',
  Veneno: '#96549b',
  Terrestre: '#c6a45e',
  Pedra: '#a7954b',
  Inseto: '#9aa82f',
  Fantasma: '#5e5a99',
  Aço: '#8fa4ad',
}

const typeTranslation = {
  Water: 'Água',
  Fire: 'Fogo',
  Grass: 'Grama',
  Electric: 'Elétrico',
  Psychic: 'Psíquico',
  Ice: 'Gelo',
  Dragon: 'Dragão',
  Dark: 'Sombrio',
  Fairy: 'Fada',
  Normal: 'Normal',
  Fighting: 'Lutador',
  Flying: 'Voador',
  Poison: 'Veneno',
  Ground: 'Terrestre',
  Rock: 'Pedra',
  Bug: 'Inseto',
  Ghost: 'Fantasma',
  Steel: 'Aço',
}

export default function PokemonCard({ pokemon }) {
  const tipos = pokemon.tipos.map(
    (type) => typeTranslation[type] || type,
  )

  const mainColor = typeColors[tipos[0]] || '#3975b8'

  return (
    <article
      className="pokemon-card"
      style={{ '--type-color': mainColor }}
    >
      <span className="pokemon-id">
        #{pokemon.numero}
      </span>

      <div className="pokemon-art">
        <img src={pokemon.imagem} alt={pokemon.nome} />
      </div>

      <h2>{pokemon.nome}</h2>

      <div className="types">
        {tipos.map((type) => (
          <span
            key={type}
            style={{
              backgroundColor: typeColors[type] || mainColor,
            }}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="facts">
        <div>
          <span>Altura</span>
          <strong>{pokemon.altura}</strong>
        </div>

        <div>
          <span>Peso</span>
          <strong>{pokemon.peso}</strong>
        </div>

        <div title={pokemon.habilidades.join(', ')}>
          <span>Habilidade</span>
          <strong>{pokemon.habilidades[0]}</strong>
        </div>
      </div>

      <div className="stats">
        <StatBar label="HP" value={pokemon.hp} />
        <StatBar label="Ataque" value={pokemon.ataque} />
        <StatBar label="Defesa" value={pokemon.defesa} />
        <StatBar
          label="Velocidade"
          value={pokemon.velocidade}
        />
      </div>
    </article>
  )
}
