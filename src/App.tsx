import './App.css'
import {useState} from 'react';

interface Food {
  name: string;
  price: number;
}

interface FoodState {
  name: string;
  count: number;
}

const FOODS: Food[] = [
  {name: 'Hamburger', price: 80},
  {name: 'Cheeseburger', price: 90},
  {name: 'Fries', price: 90},
  {name: 'Coffee', price: 70},
  {name: 'Tea', price: 80},
  {name: 'Cola', price: 40},
];


const App = () => {
  const [food, setFood] = useState([
    {name: 'Hamburger', count: 1},
    {name: 'Cheeseburger', count: 1},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 7},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const getPrice = (item: FoodState): number => {
    let total = 0;

      FOODS.forEach(food => {
        if (food.name === item.name) {
          total += food.price * item.count;
        }
      });

      return total;
  };

  const removeFoodItem = (name: string) => {
    setFood((prevFood) => {
        return prevFood.map((food) => {
          if (food.name === name) {
            return {
              ...food,
              count: food.count - 1,
            }
          }

          return food;
        })
    });
  };

  const addFoodItem = (name: string) => {
    setFood((prevFood) => {
      return prevFood.map((food) => {
        if (food.name === name) {
          return {
            ...food,
            count: food.count + 1,
          }
        }

        return food;
      })
    });
  };

  return (
      <div className="App">
        <div className="OrderList col">
          {food.map((item, index) => (
            item.count > 0 ? (
              <div className="OrderItem" key={index + item.count + item.name}>
                <span>{item.name}</span>
                <strong> x{item.count}</strong>
                <span> {getPrice(item)} KGS</span>
                <button onClick={() => removeFoodItem(item.name)}>remove</button>
              </div>
            ) : null
          ))}
        </div>
        <div className="FoodItems col">
          <h1>Food items</h1>
          {FOODS.map((item) => (
            <div className="ItemCard" onClick={() => addFoodItem(item.name)}>
              <img src="" alt={item.name}/>
              <p>
                <span>{item.name}</span>
                <strong>Price: {item.price} KGS</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default App;
