import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Book from './pages/Book'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
