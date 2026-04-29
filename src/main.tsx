import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import App from './App.tsx';

const base = import.meta.env.BASE ?? '/';
const basename = base === '/' ? undefined : String(base).replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
