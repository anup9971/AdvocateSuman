import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import Litigation from './components/readmore/Litigation';
import BankingAndFinance from './components/readmore/BankingAndFinance';
import CorporateAdvisoryAndRegulatoryCompliances from './components/readmore/CorporateAdvisoryAndRegulatoryCompliances';
import DisputeResolution from './components/readmore/DisputeResolution';
import Comptetion from './components/readmore/Comptetion';
import TechnologyMediaAndCommunication from './components/readmore/TechnologyMediaAndCommunication';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/readmore/litigation' element={<Litigation />} />
        <Route path='/readmore/banking-finance' element={<BankingAndFinance />} />
        <Route path='/readmore/corporate-advisory' element={<CorporateAdvisoryAndRegulatoryCompliances />} />
        <Route path='/readmore/dispute-resolution' element={<DisputeResolution />} />
        <Route path='/readmore/competition' element={<Comptetion />} />
        <Route path='/readmore/technology-media' element={<TechnologyMediaAndCommunication />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;    
