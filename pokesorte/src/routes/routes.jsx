import { Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import DrawPage from '../components/pages/DrawPage';
import Album from '../components/pages/Album';

function AppRoutes({
    onPokemonDrawn,
    cartasDaColecao,
    quantidadeNaColecao
}) {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        quantidadeNaColecao={quantidadeNaColecao}
                    />
                }
            />

            <Route
                path="/sortear"
                element={
                    <DrawPage
                        onPokemonDrawn={onPokemonDrawn}
                    />
                }
            />

            <Route
                path="/album"
                element={
                    <Album
                        cartas={cartasDaColecao}
                    />
                }
            />
        </Routes>
    );
}

export default AppRoutes;