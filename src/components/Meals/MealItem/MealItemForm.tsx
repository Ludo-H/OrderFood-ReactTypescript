import React, { useRef } from 'react';
import Input from '../../UI/Input';

type Props = {
    id: string
}

const MealItemForm: React.FC<Props> = (props) => {

    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log(amountInputRef.current!.value);
    };

    return (
        <form className='mealItemForm' onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
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