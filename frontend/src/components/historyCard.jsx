import React, { useState } from "react";
import MedicineTypeDropdown from "./medicinetype.jsx";
import MedicineStatusDropdown from "./medicineStatus.jsx";
import { StartDate, EndDate } from "./medicineDate.jsx";
import InputName from "./medicineUserName";
import prescriptionHistory from "../../data/history.js";
function History() {
    const [nameStore, setNameStore] = useState(""); const [nameS, setNameS] = useState("");
    const [sDateStore, setSDateStore] = useState(""); const [sDateS, setSDateS] = useState("");
    const [eDateStore, setEDateStore] = useState(""); const [eDateS, setEDateS] = useState("");
    const [medStatus, setMedStatus] = useState(""); const [medStatus1, setMedStatus1] = useState("");
    const [selectedType, setSelectedType] = useState(""); const [selectedType1, setSelectedType1] = useState("");
    const [filterHistory, setFilterHistory] = useState(null);
    let filterData = {
        name: nameStore,
        startdate: sDateStore,
        enddate: eDateStore,
        status: medStatus,
        type: selectedType,
    }
    function onChangeFilter() {
        setNameS(nameStore); setNameStore('');
        setSDateS(sDateStore); setEDateStore(''); 
        setEDateS(eDateStore); setSDateStore(''); 
        setMedStatus1(medStatus); setMedStatus(''); 
        setSelectedType1(selectedType); setSelectedType(''); 
        setFilterHistory(1)
        console.log("filter data : ", filterData)  // consoling the filter data
    }
    function resetFilter(){
        setFilterHistory(null);
        setNameS(""); setSDateS(""); setEDateS(""); setMedStatus1(""); setSelectedType1("");
    }
    const HistoryCard = ({ name, type, dosage, status, freq, start, end }) => {
        // individual card
        return (
            <>
                <div className="w-[25rem] rounded-lg shadow-lg overflow-y-scroll h-auto bg-gray-100 p-5 pt-3"
                style={{ scrollbarWidth: "none" }}>
                    <h1 className="font-bold text-lg">{name}</h1>
                    <p className="text-sm">Type: {type}</p>
                    <p className="text-sm">Dosage: {dosage}</p>
                    <p className="text-sm">Status: {status}</p>
                    <p className="text-sm">Frequency: {freq}</p>
                    <p className="text-sm">Start: {start}</p>
                    <p className="text-sm">End: {end}</p>
                </div>
            </>
        )
    }
    
    return (
        <>
            <div className="flex gap-10 px-10">
                <InputName nameStore={nameStore} setNameStore={setNameStore} />
                <StartDate sDateStore={sDateStore} setSDateStore={setSDateStore} />
                <EndDate eDateStore={eDateStore} setEDateStore={setEDateStore} />
                <MedicineStatusDropdown medStatus={medStatus} setMedStatus={setMedStatus} />
                <MedicineTypeDropdown selectedType={selectedType} setType={setSelectedType} />
                <button onClick={onChangeFilter}
                    className="bg-violet-400 hover:bg-violet-500 shadow-md duration-300 text-white px-15 cursor-pointer rounded-md">
                    Filter</button>
                <button onClick={resetFilter}
                    className="bg-violet-400 hover:bg-violet-500 shadow-md duration-300 text-white px-15 cursor-pointer rounded-md">
                    Reset</button>
            </div>
            {filterData && (
                <div className="px-10 flex gap-10 mt-5 -mb-4">
                    <p>Name : {nameS}</p>
                    <p>Start Date : {sDateS}</p>
                    <p>End Date : {eDateS}</p>
                    <p>Status : {medStatus1}</p>
                    <p>Type : {selectedType1}</p>
                </div>
            )}
            {filterData && filterHistory===null && (
                <>
                    {/* card container */}
                    <div className="grid grid-cols-3 mx-4 rounded-lg overflow-x-scroll w-[97%] gap-10 py-10 px-5"
                        style={{ scrollbarWidth: 'none' }}>
                        {/* mapping array data for each card */}
                        {prescriptionHistory.map((card) => (
                            card.medicines.map((medata) => (
                                <HistoryCard key={`${card.id}-${medata.name}`}
                                name={medata.name} type={medata.type} dosage={medata.dosage} status={medata.status}
                                start={card.startDate} end={card.endDate} freq={medata.frequency} />
                            ))
                        ))}
                    </div>
                </>
            )}
            {filterData && filterHistory && (
                <>
                    {/* card container */}
                    <div className="grid grid-cols-3 mx-4 rounded-lg overflow-x-scroll w-[97%] gap-10 py-10 px-5"
                        style={{ scrollbarWidth: 'none' }}>
                        {/* mapping array data for each card */}
                        {prescriptionHistory.map((card) => (
                            card.medicines.map((medata) => { 
                                const startDateOb1 = new Date(sDateS);
                                const startDateOb = new Date(card.startDate);
                                const endDateOb = new Date(card.endDate);
                                const endDateOb1 = new Date(eDateS);
                                return(
                                selectedType1 === medata.type &&
                                startDateOb1 <= startDateOb &&
                                endDateOb1 >= endDateOb &&
                                medStatus1 === medata.status ?
                                <HistoryCard key={`${card.id}-${medata.name}`}
                                name={medata.name} type={medata.type} dosage={medata.dosage} status={medata.status}
                                start={card.startDate} end={card.endDate} /> : <></>
                                )
                        })
                        ))}
                    </div>
                </>
            )}
        </>
    )
}
export default History;