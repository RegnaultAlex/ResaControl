import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from '@/components/ui/provider.tsx'
import App from './App.tsx'
import './index.css';
import { AuthContextProvider } from './components/auth/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvider>
            <BrowserRouter>
                <Provider>
                    <App />
                </Provider>
            </BrowserRouter>
        </AuthContextProvider>
    </StrictMode>
)
