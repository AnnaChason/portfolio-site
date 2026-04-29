import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage.tsx';
import PhotographyPage from './pages/PhotographyPage.tsx';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const isPhoto = location.pathname === '/Photography';

    return (
        <div className="relative">
            <header className="absolute right-4 top-4 z-50 sm:right-8 sm:top-6">
                <div className="flex items-center rounded-full border border-[#8EA684]/60 bg-[#CFE0C6]/95 p-1 shadow-md shadow-[#6E8668]/20 backdrop-blur-sm">
                    <button
                        type="button"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            !isPhoto ? 'bg-[#B9CFAD] text-[#3E5238]' : 'bg-transparent text-[#3E5238] hover:bg-[#B9CFAD]/50'
                        }`}
                        onClick={() => navigate('/')}
                    >
                        CS Library
                    </button>
                    <button
                        type="button"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            isPhoto ? 'bg-[#B9CFAD] text-[#3E5238]' : 'bg-transparent text-[#3E5238] hover:bg-[#B9CFAD]/50'
                        }`}
                        onClick={() => navigate('/Photography')}
                    >
                        Photography
                    </button>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<LibraryPage />} />
                <Route path="/Photography" element={<PhotographyPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;
