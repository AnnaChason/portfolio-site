import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage.tsx';
import PhotographyPage from './pages/PhotographyPage.tsx';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const normalizedPath = location.pathname.replace(/\/+$/, '').toLowerCase();
    const isPhoto = /(^|\/)photography(\/|$)/.test(normalizedPath);
    const goHome = () => {
        navigate('/');
        const baseUrl = String(import.meta.env.BASE_URL ?? '/');
        const baseWithoutSlash = baseUrl.replace(/\/$/, '');
        if (typeof window !== 'undefined' && window.location.pathname === baseWithoutSlash) {
            window.history.replaceState(window.history.state, '', baseUrl);
        }
    };

    return (
        <div className="relative">
            <header className="absolute right-4 top-4 z-50 sm:right-8 sm:top-6">
                <div className="flex items-center rounded-full border border-[#8EA684]/60 bg-[#CFE0C6]/95 p-1 shadow-md shadow-[#6E8668]/20 backdrop-blur-sm">
                    <button
                        type="button"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            !isPhoto ? 'bg-[#B9CFAD] text-[#3E5238]' : 'bg-transparent text-[#3E5238] hover:bg-[#B9CFAD]/50'
                        }`}
                        onClick={goHome}
                    >
                        CS Library
                    </button>
                    <button
                        type="button"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            isPhoto ? 'bg-[#B9CFAD] text-[#3E5238]' : 'bg-transparent text-[#3E5238] hover:bg-[#B9CFAD]/50'
                        }`}
                        onClick={() => navigate('/photography')}
                    >
                        Photography
                    </button>
                </div>
            </header>

            <Routes>
                <Route path="*" element={isPhoto ? <PhotographyPage /> : <LibraryPage />} />
            </Routes>
        </div>
    );
}

export default App;
