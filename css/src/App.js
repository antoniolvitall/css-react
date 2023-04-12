import './App.css';
import "./components/MyComponents.css";
import MyComponents from './components/MyComponents';
import {useState} from "react";
import Title from './components/Title';

function App() {
const n = 15;
const [name] = useState("Antonio");

const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponents/>
      <p>Este paragrafo e do app.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inLine</p>
      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"}) }>CSS dinamico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"}) }>CSS dinamico</h2>
      <h2 style={name === "Antoni" ? ({color: "green", backgroundColor: "#000"}) : null }>Teste nome</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title" }>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
