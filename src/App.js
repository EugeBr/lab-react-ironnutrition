import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {

  const displayFoods = () => {
    return (
      foods.map((food, index) => {
        return (
          <FoodBox
            key={`food-${index}`}
            {...food}
          />
        )
      })
    )
  }

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayFoods()}
      </Row>
    </div>
  );
}

export default App;
