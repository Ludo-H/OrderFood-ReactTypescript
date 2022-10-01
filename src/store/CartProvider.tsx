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
    item: Items,
}


const defaultCartState: DefaultCartStateType = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: DefaultCartStateType, action: ActionCart) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item: Items) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        
        let updatedItems: Items[];

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex((item: Items) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems: Items[];
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.item.id);
        }else{

        }
    }

    return defaultCartState;
};

const CartProvider: React.FC<Props> = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: Items) =>{
        dispatchCartAction({type: ActionType.ADD, item: item});
    };

    const removeItemFromCartHandler = (id: string) =>{
        dispatchCartAction({type: ActionType.REMOVE, id})
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