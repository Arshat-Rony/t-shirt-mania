import React from 'react';
import Parent from '../Parent/Parent';

export const ItemContext = React.createContext('item')
const GrandItem = () => {
    return (
        <ItemContext.Provider value='This is from context'>
            <div>
                <h1>This is GrandItem</h1>
                <Parent></Parent>
            </div>
        </ItemContext.Provider>
    );
};

export default GrandItem;