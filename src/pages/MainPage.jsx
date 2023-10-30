import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Social from '../components/Social'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div>
    <main>
      <Home />
      <About />
      <Project />
      <Contact />
      <div className='hidden xl:block'>
      <Social />
      </div>
    </main>
    <Footer />
    </div>
  )
}

export default MainPage