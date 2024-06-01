import React from 'react';
import FoodItemCard from './FoodItemCard/FoodItemCard';
import "./FoodItems.css"

interface Food {
  name: string;
  price: number;
  image: string;
}

interface Props {
  foods: Food[];
  addFoodItem: (name: string) => void;
}

const FoodItems: React.FC<Props> = ({foods, addFoodItem}) => {
  return (
    <div className="FoodItems col">
      <h2 className="FoodItemsTitle">Food items</h2>
      <div className="items">
        {foods.map((item) => (
          <FoodItemCard
            name={item.name}
            key={item.name + item.price}
            price={item.price}
            image={item.image}
            addFoodItem={addFoodItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItems;