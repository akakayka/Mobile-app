import React, { createContext, useContext, useState } from 'react';


const MyOrderContext = createContext();


export const MyOrderProvider = ({ children }) => {
    const [isMyOrder, setIsMyOrder] = useState(false);

    return (
        <MyOrderContext.Provider value={{ isMyOrder, setIsMyOrder }}>
            {children}
        </MyOrderContext.Provider>
    );
};

export const useMyOrderContext = () => useContext(MyOrderContext);

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [globalID, setGlobalID] = useState('');

    return (
        <MyContext.Provider value={{ globalID, setGlobalID }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);