
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NavElement from './components/NavElement'

function App() {

  return (
    <BrowserRouter>
    <header>
      <NavElement />
    </header>
    <Routes>
         <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
