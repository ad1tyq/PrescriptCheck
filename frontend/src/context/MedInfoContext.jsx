import React, { useState , useContext, createContext} from "react"

const MedInfoContext = createContext();

export function MedInfoProvider({ children }){
    const [medinfo, setMedInfo] = useState([]);
    return(
        <MedInfoContext.Provider value={{medinfo, setMedInfo}}>
            {children}
        </MedInfoContext.Provider>
    );
}

export function useMedInfo(){
    return useContext(MedInfoContext);
}