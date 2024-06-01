import React from 'react';
import OrderItem from './OrderItem/OrderItem';

interface FoodState {
  name: string;
  count: number;
}

interface Props {
  food: FoodState[];
  getPrice: (item: FoodState) => number;
  removeFoodItem: (name: string) => void;
}

const OrderList: React.FC<Props> = ({food, getPrice, removeFoodItem}) => {

  const getTotalPrice = () => food
    .reduce((acc, current) => {
      return acc += getPrice(current);
  }, 0);

  const orderList = (
    food.map((item, index) => (
      item.count > 0 ? (
        <OrderItem
          item={item}
          key={item.name + index + item.count}
          removeFoodItem={removeFoodItem}
          getPrice={getPrice}
        />
      ) : null
    )).filter(item => item !== null)
  );

  return (
    <div className="OrderList col">
      {orderList.length > 0 ? (
        <>
          {orderList}
          <div>Total price: {getTotalPrice()} KGS</div>
        </>
      ) : (
      <>
        <h3>Order list empty now</h3>
        <p>Add some item in list</p>
      </>
      )}
    </div>
  );
};

export default OrderList;