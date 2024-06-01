import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import './OrderList.css';
import { FoodInfo } from '../../lib/interfaces';

interface Props {
  food: FoodInfo[];
  getPrice: (item: FoodInfo) => number;
  removeFoodItem: (name: string) => void;
}

const OrderList: React.FC<Props> = ({ food, getPrice, removeFoodItem }) => {
  const getTotalPrice = () =>
    food.reduce((acc, current) => {
      return (acc += getPrice(current));
    }, 0);

  const orderList = food
    .map((item, index) =>
      item.count > 0 ? (
        <OrderItem
          item={item}
          key={item.name + index + item.count}
          removeFoodItem={removeFoodItem}
          getPrice={getPrice}
        />
      ) : null,
    )
    .filter((item) => item !== null);

  return (
    <div className="OrderList col">
      <h2 className="orderTitle">Order Details:</h2>
      {orderList.length > 0 ? (
        <>
          {orderList}
          <div className="total-price">Total price: {getTotalPrice()} KGS</div>
        </>
      ) : (
        <>
          <h3 className="orderSubtitle">Order list is empty now...</h3>
          <p className="orderInfo">Add some item in list.</p>
        </>
      )}
    </div>
  );
};

export default OrderList;
