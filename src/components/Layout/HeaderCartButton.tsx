import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

type Props = {
    onClick: () => void
};

const HeaderCartButton: React.FC<Props> = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber: number, item) => {
        return curNumber + item.amount
    }, 0);

    return (
        <button className='hearderCartButton' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className='badge'>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;