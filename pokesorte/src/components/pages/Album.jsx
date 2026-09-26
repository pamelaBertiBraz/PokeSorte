export default function Album() {
  return (
    <main className="album-page">
      <header className="album-page__header">
        <h1>Meu álbum Pokémon</h1>
        <p>As cartas que você conseguir no sorteio aparecerão aqui.</p>
      </header>

      <section className="album-page__collection" aria-label="Cartas do álbum">
        <p className="album-page__empty">
          Seu álbum está vazio. Sorteie uma carta para começar sua coleção.
        </p>
      </section>
    </main>
  )
}
