import './styles/App.css';
import Hero from './components/hero';
import About from './components/About';
import ProShows from './components/proshow';
import Events from './components/events';
import Workshop from './components/workshop';
import Tickets from './components/tickets';
import ContactUs from './components/contactUs';
function App() {
  return (
    <div className="App">
      <div className='hero-section' id='home'>
        <Hero />
        
      </div>
      <div className='about-section' id='about'>
        <About />
      </div>
      <div className='proshow-section' id='events'>
        <ProShows />
      </div>
      <div className='events-section'>
        <Events />
      </div>
      <div className='workshop-section'>
        <Workshop />
      </div>
      <div className='contactUs-section' id='contactUs'>
        <ContactUs />
      </div>
      <div className='ticket-div' id='buyTickets'>
        <Tickets />
      </div>
    </div>
  );
}

export default App;
