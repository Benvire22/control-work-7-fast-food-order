import './App.css';
import { useState } from 'react';
import Hamburger from './assets/icons/ic-hamburger.svg';
import Cheeseburger from './assets/icons/ic-cheeseburger.svg';
import Fries from './assets/icons/ic-fries.svg';
import Coffee from './assets/icons/ic-coffee.svg';
import Tea from './assets/icons/ic-tea.svg';
import Cola from './assets/icons/ic-cola.svg';
import OrderList from './components/OrderList/OrderList';
import FoodItems from './components/FoodItems/FoodItems';
import { Food, FoodInfo } from './lib/interfaces';

const FOODS: Food[] = [
  { name: 'Hamburger', price: 80, image: Hamburger },
  { name: 'Cheeseburger', price: 90, image: Cheeseburger },
  { name: 'Fries', price: 90, image: Fries },
  { name: 'Coffee', price: 70, image: Coffee },
  { name: 'Tea', price: 80, image: Tea },
  { name: 'Cola', price: 40, image: Cola },
];

const App = () => {
  const [food, setFood] = useState<FoodInfo[]>([
    { name: 'Hamburger', count: 0 },
    { name: 'Cheeseburger', count: 0 },
    { name: 'Fries', count: 0 },
    { name: 'Coffee', count: 0 },
    { name: 'Tea', count: 0 },
    { name: 'Cola', count: 0 },
  ]);

  const getPrice = (item: FoodInfo): number => {
    let total = 0;

    FOODS.forEach((food) => {
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
          };
        }

        return food;
      });
    });
  };

  const addFoodItem = (name: string) => {
    setFood((prevFood) => {
      return prevFood.map((food) => {
        if (food.name === name) {
          return {
            ...food,
            count: food.count + 1,
          };
        }

        return food;
      });
    });
  };

  return (
    <div className="App">
      <OrderList
        food={food}
        getPrice={getPrice}
        removeFoodItem={removeFoodItem}
      />
      <FoodItems foods={FOODS} addFoodItem={addFoodItem} />
    </div>
  );
};

export default App;
