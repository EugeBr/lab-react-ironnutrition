import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {

  const displayFoods = () => {
    return (
      /*foods.map((food, index) => {
        return (
          <FoodBox
          key={`food-${index}`}
          {...food}
          />
        )
      })*/
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
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
