import { useState } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import DrawPage from './components/pages/DrawPage';
import Album from './components/pages/Album';

function App() {
    const [telaAtual, setTelaAtual] = useState('home');

    function renderizarTela() {
        switch (telaAtual) {
            case 'home':
                return (
                    <Home
                        onNavigate={setTelaAtual}
                    />
                );

            case 'sortear':
                return <DrawPage />;

            case 'album':
                return <Album />;

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