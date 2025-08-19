import React, {useState} from "react";
import MedicineTypeDropdown from "./medicinetype.jsx";
import MedicineStatusDropdown from "./medicineStatus.jsx";
import {StartDate, EndDate} from "./medicineDate.jsx";
import InputName from "./medicineUserName";
function History() {
    const [nameStore, setNameStore] = useState(""); const [nameS, setNameS] = useState("");
    const [sDateStore, setSDateStore] = useState(""); const [sDateS, setSDateS] = useState("");
    const [eDateStore, setEDateStore] = useState(""); const [eDateS, setEDateS] = useState("");
    const [medStatus, setMedStatus] = useState(""); const [medStatus1, setMedStatus1] = useState("");
    const [selectedType, setSelectedType] = useState(""); const [selectedType1, setSelectedType1] = useState("");
    let filterData = {
        name : nameStore,
        startdate : sDateStore,
        enddate : eDateStore,
        status : medStatus,
        type : selectedType,
    }
    function onChangeFilter(){
        setNameS(nameStore); setNameStore('');
        setSDateS(sDateStore); setEDateStore('')
        setEDateS(eDateStore); setSDateStore('')
        setMedStatus1(medStatus); setMedStatus('')
        setSelectedType1(selectedType); setSelectedType('')

        console.log("filter data : ", filterData)  // consoling the filter data
    }
    return (
        <>
        <div className="flex gap-12.5 px-10">
            <InputName nameStore={nameStore} setNameStore={setNameStore} />
            <StartDate sDateStore={sDateStore} setSDateStore={setSDateStore}/>
            <EndDate eDateStore={eDateStore} setEDateStore={setEDateStore}/>
            <MedicineStatusDropdown medStatus={medStatus} setMedStatus={setMedStatus}/>
            <MedicineTypeDropdown selectedType={selectedType} setType={setSelectedType}/>
            <button onClick={onChangeFilter}
            className="bg-violet-400 hover:bg-violet-500 duration-300 text-white px-15 cursor-pointer rounded-md">
                Filter</button>
        </div>
        {filterData && (
            <div className="px-10 flex gap-10 mt-2">
                <p>Name : {nameS}</p>
                <p>Start Date : {sDateS}</p>
                <p>End Date : {eDateS}</p>
                <p>Status : {medStatus1}</p>
                <p>Type : {selectedType1}</p>
            </div>
        )}
        </>
    )
}
export default History;