import logo from './logo.svg';
import './App.css';

// Importar compomentes
import MiComponente from './components/MiComponente';

function HolaHolita(nombre){
  var presentacion = <h2>𝓑𝓲.𝓮𝓷.𝓿𝓮.𝓷𝓲.𝓭𝓸 {nombre}</h2>
  return presentacion;
}

function App() {
  var nombre = "Sandra De Tena";
  var presentacion = <h2>Bi.en.ve.ni.do {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        ℍ𝕠𝕝𝕒 𝕊𝕒𝕟𝕕𝕣𝕒 𝔻𝕖 𝕋𝕖𝕟𝕒 😍😍😍.
        </p>
        
        <section className='componentes'>
          <MiComponente></MiComponente>
        </section>
      </header>
    </div>
  );
}

export default App;
