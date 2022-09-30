import React from 'react';
import Modal from '../UI/Modal';

type CartItems = {
    id: string,
    name: string,
    amount: number,
    description: string,
    price: number
};

type Props = {
    onClose: () => void
};

const Cart: React.FC<Props> = (props) => {

    const cartItems: CartItems[] = [];

    return (
        <Modal onClose={props.onClose}>
            <ul className='cart-items'>
                {cartItems.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <div className='total'>
                <span>Total Amount</span>
                <span>35.78</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onClose}>Close</button>
                <button className='cart-button'>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;