import './styles/App.css';
import Hero from './components/hero';
import About from './components/About';
import ProShows from './components/proshow';
function App() {
  return (
    <div className="App">
      <div className='hero-section'>
        <Hero />
      </div>
      <div className='about-section'>
        <About />
      </div>
      <div className='proshow-section'>
        <ProShows />
      </div>
    </div>
  );
}

export default App;
