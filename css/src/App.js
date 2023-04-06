import './App.css';
import "./components/MyComponents.css";
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponents/>
      <p>Este paragrafo e do app.js</p>
    </div>
  );
}

export default App;
