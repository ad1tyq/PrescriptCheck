import React, { useState, useContext, createContext } from "react"; // Make sure useState is imported

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
    const [prescriptionHistory, setHistory] = useState([]);
    
    return (
        <HistoryContext.Provider value={{ prescriptionHistory, setHistory }}>
            {children}
        </HistoryContext.Provider>
    );
}

export function useHistory() {
    return useContext(HistoryContext);
}