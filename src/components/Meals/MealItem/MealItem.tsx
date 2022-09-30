import React from 'react';
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

    const price = `$${props.meal.price.toFixed(2)}`;

    return (
        <li className='meal'>
            <div>
                <h3>{props.meal.name}</h3>
                <div className='description'>{props.meal.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id}/>
            </div>
        </li>
    );
};

export default MealItem;