import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';

type Props = {
    meal: {
        id: string,
        price: number,
        name: string,
        description: string
    }
};

const MealItem: React.FC<Props> = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.meal.price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount, 
            price: props.meal.price
        });
    };

    return (
        <li className='meal'>
            <div>
                <h3>{props.meal.name}</h3>
                <div className='description'>{props.meal.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;