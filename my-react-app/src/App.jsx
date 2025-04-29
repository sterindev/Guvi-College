import { useState } from 'react'; // ✅ Import useState
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      
      <Courses/>
      <Faculty/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
