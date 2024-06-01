import React from 'react';
import './OrderItem.css';
import { FoodInfo } from '../../../lib/interfaces';

interface Props {
  item: FoodInfo;
  getPrice: (item: FoodInfo) => number;
  removeFoodItem: (name: string) => void;
}

const OrderItem: React.FC<Props> = ({ item, getPrice, removeFoodItem }) => {
  return (
    <div className="OrderItem">
      <span className="OrderName">{item.name}</span>
      <strong className="OrderCount"> x{item.count}</strong>
      <span className="OrderPrice"> {getPrice(item)} KGS</span>
      <button
        className="removeBtn"
        onClick={() => removeFoodItem(item.name)}
      ></button>
    </div>
  );
};

export default OrderItem;
