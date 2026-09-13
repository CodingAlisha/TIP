import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from '/src/pages/Home/Home';
import About from '/src/pages/About/About';
import Contact from '/src/pages/Contact/Contact';
import Books from '/src/pages/Books/Books';
import Videos from '/src/pages/Videos/Videos';
import Navbar from "./components/Navbar/Navbar";

function App() {
 

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About/> }/>
        <Route path="/videos" element={<Videos/> }/>
        <Route path="/books" element={<Books/> }/>
        <Route path="/contact" element={<Contact/> }/>
       
    

      </Routes>
      
    </Router>
  )
}

export default App;
