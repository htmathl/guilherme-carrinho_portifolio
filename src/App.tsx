import './App.css'
import HomePage from './pages/Home/homePage'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      {
        <Routes>
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      }
    </>
  )
}

export default App
