import Chopper from './pages/Chopper/Chopper';
import Luffy from './pages/Luffy/Luffy';
import Nami from './pages/Nami/Nami';
import Sanji from './pages/Sanji/Sanji';
import Zoro from './pages/Zoro/Zoro';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



export default function App() {
  return (
   <div>
    <Router>
        <Routes>
          <Route path = "/" element = {<Luffy/>}/>
          <Route path = "/chopper" element = {<Chopper/>}/>
          <Route path = "/zoro" element = {<Zoro/>}/>
          <Route path = "/nami" element = {<Nami/>}/>
          <Route path = "/sanji" element = {<Sanji/>}/>
        </Routes>
      </Router>
   </div>
  )

}

