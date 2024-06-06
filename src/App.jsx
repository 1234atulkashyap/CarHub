
import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Download from './components/Downloadd'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col' >
    <Navbar/>
    <Home/>
    <About/>
    <Features/>
    <Download/>
    <Footer/>
    </div>
  )
}

export default App
