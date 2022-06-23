import foods from './foods.json';
import './App.css';

function App() {

  const displayFoods = () => {
    return (
      foods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src= {food.image} width={100} />
          </div>
        )
      })
    )
  }

  return (
    <div className="App">
      <h2>Food List</h2>
      { 
      displayFoods() 
      }
    </div>
  );
}

export default App;
