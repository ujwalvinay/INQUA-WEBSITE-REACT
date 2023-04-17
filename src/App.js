import './styles/App.css';
import Hero from './components/hero';
import About from './components/About';
import ProShows from './components/proshow';
import Events from './components/events';
import Workshop from './components/workshop';
import InkuCanvas from './components/inku';
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
      <div className='events-section'>
        <Events />
      </div>
      <div className='workshop-section'>
        <Workshop />
      </div>
    </div>
  );
}

export default App;
