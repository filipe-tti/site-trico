import MeuBotao from './components/MeuBotao';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="p-4">
      {/*<h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind está funcionando!</h1> */}
     {/* <MeuBotao /> */}
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
