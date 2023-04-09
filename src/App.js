import './styles/App.css';
import Hero from './components/hero';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <div className='hero-section'>
        <Hero />
      </div>
      <div className='about-section'>
        <About />
      </div>
    </div>
  );
}

export default App;
