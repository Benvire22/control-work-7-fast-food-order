import React from 'react';
import "./FoodItem.css";

interface Props {
  name: string;
  image: string;
  price: number;
  addFoodItem: (name: string) => void;
}

const FoodItemCard: React.FC<Props> = ({name, price, image, addFoodItem}) => {
  return (
    <div key={name} className="ItemCard" onClick={() => addFoodItem(name)}>
      <img className="item-image" src={image} alt={name}/>
      <p className="itemInfo">
        <span>{name}</span>
        <strong>Price: {price} KGS</strong>
      </p>
    </div>
  );
};

export default FoodItemCard;