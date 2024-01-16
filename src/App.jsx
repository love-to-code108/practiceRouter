// IMPORTING REACT MODULES
import { Routes , Route } from "react-router-dom"
// IMPORTING PAGES 
import { Areact } from "./pages/Areact"

// IMPORTING COMPONENTS



// IMPORTING CSS
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Areact/>} />
    </Routes>
  )
}

export default App
