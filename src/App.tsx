import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Enchristo from './pages/Enchristo';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/enchristo' element={<Enchristo />} />
        </Routes>
      </ BrowserRouter >
    </div >

  );
}

export default App;
