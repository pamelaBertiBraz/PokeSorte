import { BrowserRouter } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import AppRoutes from './routes/routes';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main className="app-content">
                <AppRoutes />
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
