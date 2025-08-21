import React, { useState, useContext, createContext } from "react"; // Make sure useState is imported

const InteractContext = createContext();

export function InteractProvider({ children }) {
    const [interact, setInteract] = useState("");
    
    return (
        <InteractContext.Provider value={{ interact, setInteract}}>
            {children}
        </InteractContext.Provider>
    );
}

export function useInteract() {
    return useContext(InteractContext);
}