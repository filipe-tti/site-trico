import MeuBotao from './components/MeuBotao';
import Hero from './components/Hero';
import About from './components/About';
import Trico from './components/Trico';
import Croche from './components/Croche';
import Footer from './components/Footer';

function App() {
  return (
    <div className="p-4">
      {/*<h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind está funcionando!</h1> */}
     {/* <MeuBotao /> */}
      <Hero/>
      <About/>
      <Trico/>
      <Croche/>
      <Footer/>
    </div>
  );
}

export default App;
