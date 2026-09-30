import './Home.css';
import logoPokeSorte from '../../assets/logo-pokesorte.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home({ quantidadeNaColecao = 0 }) {
    const navigate = useNavigate();

    return (
        <main className="home">
            <section className="home__content">

                <img
                    className="home__logo"
                    src={logoPokeSorte}
                    alt="PokeSorte"
                />

                <p className="home__description">
                    O PokeSorte é uma coleção de cartas Pokémon
                    inspirado nos 151 Pokémon da primeira geração.
                    Sorteie cartas, descubra novos Pokémon e complete seu álbum!
                </p>

                <section
                    className="home__cards"
                    aria-label="Informações do jogo"
                >

                    <article className="home__card">
                        <strong>151</strong>
                        <span>Pokémon disponíveis</span>
                    </article>

                    <article className="home__card">
                        <strong>{quantidadeNaColecao}</strong>
                        <span>na coleção</span>
                    </article>

                    <article className="home__card">
                        <strong>1</strong>
                        <span>Pokémon por pack</span>
                    </article>

                </section>

                <div className="home__actions">

                    <Button
                        variant="contained"
                        onClick={() => navigate('/sortear')}
                    >
                        Sortear
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => navigate('/album')}
                    >
                        Álbum
                    </Button>
                </div>

            </section>
        </main>
    );
}

export default Home;