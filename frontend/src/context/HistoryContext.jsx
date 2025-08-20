// HistoryContext.jsx
import React, { useState, useContext, createContext } from "react"; // Make sure useState is imported

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
    // FIX: Changed useContext([]) to useState([])
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