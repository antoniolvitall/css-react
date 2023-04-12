import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    {name: "Sandero", km: 117000, color: "Preto"},
    {name: "Celta", km: 90000, color: "Vermelho"},
    {name: "City", km: 10000, color: "Branco"},
  ];

  return (
    <div className="App">
      <h1>Meus carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
