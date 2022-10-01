import React from "react";

type Item = {
  price: number,
  name: string,
  amount: number
}

type Props = {
  item: {
    price: number,
    name: string,
    amount: number
  },
  onAdd: (item: Item) => void,
  onRemove: (id: string) => void
}

const CartItem: React.FC<Props> = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.item.name}</h2>
        <div className='cart-item-summary'>
          <span className='cart-item-price'>{price}</span>
          <span className='cart-item-amount'>x {props.item.amount}</span>
        </div>
      </div>
      <div className='cart-item-actions'>
        {/* <button onClick={props.onRemove}>−</button> */}
        {/* <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default CartItem;
