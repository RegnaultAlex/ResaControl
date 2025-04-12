import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPassword from './pages/ForgotPasswordPage'
import ErrorPage from './pages/ErrorPage'
import DashboardPage from './pages/DashboardPage'


const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signin' element={<SignInPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/resetpassword' element={<ForgotPassword/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default App
