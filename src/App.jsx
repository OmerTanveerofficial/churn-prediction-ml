import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ChurnPredictor from './components/ChurnPredictor';
import FeatureEngineering from './components/FeatureEngineering';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ChurnPredictor />
        <FeatureEngineering />
        <Dashboard />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
