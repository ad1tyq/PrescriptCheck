import React, {useState} from "react";
export function StartDate({sDateStore, setSDateStore}){
    function onDateChange(e){
            setSDateStore(e.target.value);
    }
    return(
        <>
        <input type="date" value={sDateStore} onChange={onDateChange} className="border rounded-md pl-2"/>
        </>
    )
}
export function EndDate({eDateStore, setEDateStore}){
    function onDateChange(e){
            setEDateStore(e.target.value);
    }
    return(
        <>
        <input type="date" value={eDateStore} onChange={onDateChange} className="border rounded-md pl-2"/>
        </>
    )
}
