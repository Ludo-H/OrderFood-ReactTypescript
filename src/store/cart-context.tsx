import React from "react";

type CartContextType = {
    items: Items[],
    totalAmount: number,
    addItem: (item: Items) => void,
    removeItem: (id: string) => void
};

type Items = {
    id: string,
    name: string,
    amount : number,
    price: number
};

const CartContext= React.createContext<CartContextType>({
    items: [],
    totalAmount: 0,
    addItem: (item: Items) => {},
    removeItem: (id: string) => {}
});

export default CartContext;