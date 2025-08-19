import React, {useState} from "react";
function InputName({nameStore, setNameStore}){
    function onNameChange(e){
        setNameStore(e.target.value);
    }
    return(
        <>
        <input type="text" value={nameStore} onChange={onNameChange} placeholder="Enter Your Name"
        className="border rounded-md pl-2"/>
        </>
    )
}
export default InputName;