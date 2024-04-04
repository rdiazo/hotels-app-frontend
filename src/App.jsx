import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
//import HomePage from './pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import UnknownPages from './Pages/UnknownPages'
import HotelInfoPage from './Pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import ReservationsPage from './Pages/ReservationsPage'


function App() {

  return (
  <div>
    <HeaderShared />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/hotel/:id' element={<HotelInfoPage />} />
      <Route path='/reservations' element={<ReservationsPage />} />
      <Route path='*' element={<UnknownPages />} />
    </Routes>
  </div>
  )
}

export default App