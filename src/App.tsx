import './App.css'
import {useState} from 'react';
import Hamburger from "./assets/icons/ic-hamburger.svg";
import Cheeseburger from "./assets/icons/ic-cheeseburger.svg";
import Fries from "./assets/icons/ic-fries.svg";
import Coffee from "./assets/icons/ic-coffee.svg";
import Tea from "./assets/icons/ic-tea.svg";
import Cola from "./assets/icons/ic-cola.svg";

interface Food {
  name: string;
  price: number;
  image: string;
}

interface FoodState {
  name: string;
  count: number;
}

const FOODS: Food[] = [
  {name: 'Hamburger', price: 80, image: Hamburger},
  {name: 'Cheeseburger', price: 90, image: Cheeseburger},
  {name: 'Fries', price: 90, image: Fries},
  {name: 'Coffee', price: 70, image: Coffee},
  {name: 'Tea', price: 80, image: Tea},
  {name: 'Cola', price: 40, image: Cola},
];


const App = () => {
  const [food, setFood] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
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

  const orderList = (
    food.map((item, index) => (
      item.count > 0 ? (
        <div className="OrderItem" key={index + item.count + item.name}>
          <span>{item.name}</span>
          <strong> x{item.count}</strong>
          <span> {getPrice(item)} KGS</span>
          <button onClick={() => removeFoodItem(item.name)}>remove</button>
        </div>
      ) : null
    )).filter(item => item !== null)
  )

  return (
      <div className="App">
        <div className="OrderList col">
          {orderList.length > 0 ? orderList : <><h3>Order list empty now</h3><p>Add some item in list</p></>}
        </div>
        <div className="FoodItems col">
          {FOODS.map((item) => (
            <div key={item.name} className="ItemCard" onClick={() => addFoodItem(item.name)}>
              <img className="item-image" src={item.image} alt={item.name}/>
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
