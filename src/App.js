import React from 'react'
import About from './Components/About/About'
import Contact from './Components/contact/Contact'
import Home from './Components/Home/Home'
import Project from './Components/project/Project'
import Wid from './Components/wid/Wid'
import Copyright from './Components/Copyright.js/Copyright'
const App = () => {
  return (
    <div>
      <Home/>
      <Wid/>
      <About/>
      <Project/>
      <Contact/>
      <Copyright/>

    </div>
  )
}

export default App