import React, { createContext, useContext, useState } from 'react';

const IsAuthContext = createContext();


export const IsAuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useContext(false);

    return (
        <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </IsAuthContext.Provider>
    );
};

export const useIsAuthContext = () => useContext(IsAuthContext);

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