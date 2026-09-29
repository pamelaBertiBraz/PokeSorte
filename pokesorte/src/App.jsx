import { useReducer, useState } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import DrawPage from './components/pages/DrawPage';
import Album from './components/pages/Album';
import { collectionReducer, initialState } from './reducers/collectionReducer';

function App() {
    const [telaAtual, setTelaAtual] = useState('home');
    const [colecao, dispatch] = useReducer(collectionReducer, initialState);
    const [detalhesPorId, setDetalhesPorId] = useState({});

    function adicionarPokemon(pokemon) {
        dispatch({ type: 'ADICIONAR_POKEMONS', payload: [pokemon.id] });
        setDetalhesPorId((anteriores) => ({
            ...anteriores,
            [pokemon.id]: pokemon
        }));
    }

    const cartasDaColecao = colecao.colecao
        .map((id) => detalhesPorId[id])
        .filter(Boolean);

    function renderizarTela() {
        switch (telaAtual) {
            case 'home':
                return (
                    <Home
                        onNavigate={setTelaAtual}
                    />
                );

            case 'sortear':
                return <DrawPage onPokemonDrawn={adicionarPokemon} />;

            case 'album':
                return <Album cartas={cartasDaColecao} />;

            default:
                return (
                    <Home
                        onNavigate={setTelaAtual}
                    />
                );
        }
    }

    return (
        <>
            <Header
                telaAtual={telaAtual}
                onNavigate={setTelaAtual}
            />

            <main className="app-content">
                {renderizarTela()}
            </main>

            <Footer />
        </>
    );
}

export default App;
