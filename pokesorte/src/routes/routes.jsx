import { Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import DrawPage from '../components/pages/DrawPage';
import Album from '../components/pages/Album';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sortear" element={<DrawPage />} />
            <Route path="/album" element={<Album />} />
        </Routes>
    );
}

export default AppRoutes;