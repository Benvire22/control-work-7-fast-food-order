import React from 'react';
import "./OrderItem.css";

interface FoodState {
  name: string;
  count: number;
}

interface Props {
  item: FoodState;
  getPrice: (item: FoodState) => number;
  removeFoodItem: (name: string) => void;
}

const OrderItem: React.FC<Props> = ({item, getPrice, removeFoodItem}) => {
  return (
    <div className="OrderItem">
      <span className="OrderName">{item.name}</span>
      <strong className="OrderCount"> x{item.count}</strong>
      <span className="OrderPrice"> {getPrice(item)} KGS</span>
      <button className="removeBtn" onClick={() => removeFoodItem(item.name)}></button>
    </div>
  );
};

export default OrderItem;