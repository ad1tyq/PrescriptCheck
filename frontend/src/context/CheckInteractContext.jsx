import React, { useState, useContext, createContext } from "react"; // Make sure useState is imported

const CheckInteractContext = createContext();

export function CheckInteractProvider({ children }) {
    const [checkinteract, setCheckInteract] = useState("");
    
    return (
        <CheckInteractContext.Provider value={{ checkinteract, setCheckInteract}}>
            {children}
        </CheckInteractContext.Provider>
    );
}

export function useCheckInteract() {
    return useContext(CheckInteractContext);
}