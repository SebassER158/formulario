import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario />
      </header>
    </div>
  );
}

export default App;
