import React from 'react';

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
      <span>{item.name}</span>
      <strong> x{item.count}</strong>
      <span> {getPrice(item)} KGS</span>
      <button onClick={() => removeFoodItem(item.name)}>remove</button>
    </div>
  );
};

export default OrderItem;