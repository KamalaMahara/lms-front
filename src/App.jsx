import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/nihon/Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>




    </BrowserRouter>
  )
}

export default App
