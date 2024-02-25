import {useState } from 'react'
import './App.css'
import BgImage from './components/BgImage'
import Navbar from './components/Navbar'
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './Context'
import { Toaster } from 'react-hot-toast'

function App() {

  const [theme,setTheme]=useState("dark")
  const [navbar,setNavbar]=useState(false)
  const [tech,setTech] = useState("web")
  const [mobNav,setMobNav] = useState(false)

  return (
        <ThemeContext.Provider value={{theme,setTheme,navbar,setNavbar,tech,setTech,mobNav,setMobNav}} >
          <div id={theme}>
            <div>
              <Toaster 
                position='top center'
              />
            </div>
        <Router>
          {/* <BgImage /> */}
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
