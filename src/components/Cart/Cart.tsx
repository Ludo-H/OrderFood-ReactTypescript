import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

// type CartItems = {
//     id: string,
//     name: string,
//     amount: number,
//     description: string,
//     price: number
// };

type Item = {
    price: number,
    name: string,
    amount: number,
    id: string,
}

type Props = {
    onClose: () => void
};

const Cart: React.FC<Props> = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {

    };

    const cartItemAddHandler = (item: Item) => {
        cartCtx.addItem(item);
    };

    // const cartItems: CartItems[] = [];

    return (
        <Modal onClose={props.onClose}>
            <ul className='cart-items'>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id} item={item} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
                ))}
            </ul>
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onClose}>Close</button>
                {hasItems && <button className='cart-button'>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;