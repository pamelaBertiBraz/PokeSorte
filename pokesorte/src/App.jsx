import { useReducer, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import AppRoutes from './routes/routes';

import {
    collectionReducer,
    initialState
} from './reducers/collectionReducer';

function App() {
    const [colecao, dispatch] = useReducer(
        collectionReducer,
        initialState
    );

    const [detalhesPorId, setDetalhesPorId] = useState({});

    function adicionarPokemon(pokemon) {
        dispatch({
            type: 'ADICIONAR_POKEMONS',
            payload: [pokemon.id]
        });

        setDetalhesPorId((anteriores) => ({
            ...anteriores,
            [pokemon.id]: pokemon
        }));
    }

    const cartasDaColecao = colecao.colecao
        .map((id) => detalhesPorId[id])
        .filter(Boolean);

    return (
        <BrowserRouter>
            <Header />

            <main className="app-content">
                <AppRoutes
                    onPokemonDrawn={adicionarPokemon}
                    cartasDaColecao={cartasDaColecao}
                    quantidadeNaColecao={colecao.colecao.length}
                />
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;