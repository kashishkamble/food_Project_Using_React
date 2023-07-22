import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Chefs from './components/Chefs';
import Menu from './components/Menu';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/chefs' element={<Chefs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
