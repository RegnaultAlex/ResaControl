import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Errorpage from './pages/Errorpage'


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/resetpassword' element={<ForgotPassword/>}/>
                <Route path='*' element={<Errorpage/>}/>
            </Routes>
        </>
    )
}

export default App
