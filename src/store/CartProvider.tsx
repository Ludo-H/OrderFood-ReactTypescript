import React, { useReducer } from 'react';
import CartContext from './cart-context';

// Props
type Props = {
        children?: React.ReactNode;
};

// State
type DefaultCartStateType = {
    items: Items[],
    totalAmount: number
};

// Items dans state
type Items = {
    id: string,
    name: string,
    amount : number,
    price: number
};

// Action
enum ActionType  {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

type ActionCart = {
    type: ActionType,
    item: Items
}


const defaultCartState: DefaultCartStateType = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: DefaultCartStateType, action: ActionCart) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider: React.FC<Props> = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: Items) =>{
        dispatchCartAction({type: ActionType.ADD, item: item});
    };

    const removeItemFromCartHandler = (id: string) =>{
        // dispatchCartAction({type: ActionType.REMOVE, id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;