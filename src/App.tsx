import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPassword from './pages/ForgotPasswordPage'
import ErrorPage from './pages/ErrorPage'
import DashboardPage from './pages/DashboardPage'
import { DashboardRestaurantsPage } from './pages/DashboardRestaurantsPage'


const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/connexion' element={<SignInPage />} />
                <Route path='/inscription' element={<SignUpPage />} />
                <Route path='/reinitialiser' element={<ForgotPassword/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}>
                    <Route path='restaurants' element={<DashboardRestaurantsPage/>}/>
                </Route>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default App
