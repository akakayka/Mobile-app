import React, { createContext, useContext, useState } from 'react';

const CurrentOrderContext = createContext();


export const CurrentOrderProvider = ({ children }) => {
    const [currentOrder, setCurrentOrder] = useState({'':''});

    return (
        <CurrentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
            {children}
        </CurrentOrderContext.Provider>
    );
};

export const useOrderContext = () => useContext(CurrentOrderContext);

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