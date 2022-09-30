import React from 'react';
import Input from '../../UI/Input';

type Props = {
    id: string
}

const MealItemForm: React.FC<Props> = (props) => {
    return (
        <form className='mealItemForm'>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>Add</button>
        </form>
    );
};

export default MealItemForm;