import {useState } from 'react'
import './App.css'
import BgImage from './components/BgImage'
import Navbar from './components/Navbar'
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './Context'

function App() {

  const [theme,setTheme]=useState("light")
  const [navbar,setNavbar]=useState(false)
  const [tech,setTech] = useState("web")
  const [mobNav,setMobNav] = useState(false)

  return (
        <ThemeContext.Provider value={{theme,setTheme,navbar,setNavbar,tech,setTech,mobNav,setMobNav}} >
          <div id={theme}>
        <Router>
          <BgImage />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route path='/projects' element={<MainPage />} />
          </Routes>
        </Router>
        </div>
        </ThemeContext.Provider>
        
  )
}



export default App
