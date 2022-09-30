import React from 'react';

// ...props.input va permettre de reprendre toutes les paires clé valeur de input
// pour récupérer par exemple le type de l'input

type Props = {
    label: string,
    input: {
        id: string,
        type: string,
        min: string,
        max: string,
        step: string,
        defaultValue: string
    }
};

const Input: React.FC<Props> = (props) => {
    return (
        <div className='input'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
};

export default Input;