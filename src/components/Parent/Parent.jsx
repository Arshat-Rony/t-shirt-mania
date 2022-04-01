import React, { useContext } from 'react';
import { ItemContext } from '../GrandItem/GrandItem';

const Parent = () => {
    const value = useContext(ItemContext)
    return (
        <div>
            <h1>This is parent item</h1>
            <h3>{value}</h3>
        </div>
    );
};

export default Parent;