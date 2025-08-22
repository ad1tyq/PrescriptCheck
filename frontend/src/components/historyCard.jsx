import React, { useState } from "react";
import MedicineTypeDropdown from "./medicinetype.jsx";
import MedicineStatusDropdown from "./medicineStatus.jsx";
import { StartDate, EndDate } from "./medicineDate.jsx";
import InputName from "./medicineUserName";
import { useHistory } from "../context/HistoryContext.jsx";

function History() {
    const [nameStore, setNameStore] = useState(""); const [nameS, setNameS] = useState("");
    const [sDateStore, setSDateStore] = useState(""); const [sDateS, setSDateS] = useState("");
    const [eDateStore, setEDateStore] = useState(""); const [eDateS, setEDateS] = useState("");
    const [medStatus, setMedStatus] = useState(""); const [medStatus1, setMedStatus1] = useState("");
    const [selectedType, setSelectedType] = useState(""); const [selectedType1, setSelectedType1] = useState("");
    const [filterHistory, setFilterHistory] = useState(null);
    const { prescriptionHistory } = useHistory(); // context
    if (!prescriptionHistory || prescriptionHistory.length === 0) {
        return (
            <div className="flex justify-center">
                <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[clamp(10rem,80vw,80rem)]
            text-[clamp(0.9rem,1.1vw,1.1rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                    <p><b>No history information available. Please upload a prescription first.</b></p>
                </div>
            </div>
        );
    }
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
        // console.log("filter data : ", filterData)  // consoling the filter data
    }
    function resetFilter() {
        setFilterHistory(null);
        setNameS(""); setSDateS(""); setEDateS(""); setMedStatus1(""); setSelectedType1("");
    }
    const HistoryCard = ({ name, type, dosage, status, freq, start, end }) => {
        // individual card
        return (
            <div className="w-[clamp(21rem,30vw,30rem)] rounded-lg shadow-lg overflow-y-scroll h-auto bg-gray-100 p-5 pt-3"
                style={{ scrollbarWidth: "none" }}>
                <h1 className="font-bold text-lg">{name}</h1>
                <p className="text-sm">Type: {type}</p>
                <p className="text-sm">Dosage: {dosage}</p>
                <p className="text-sm">Status: {status}</p>
                <p className="text-sm">Frequency: {freq}</p>
                <p className="text-sm">Start: {start}</p>
                <p className="text-sm">End: {end}</p>
            </div>
        )
    }

    return (
        <>
            <div className="md:flex gap-10 px-10 grid grid-cols-1">
                <InputName nameStore={nameStore} setNameStore={setNameStore} />
                <div className="flex justify-center gap-5 md:gap-10">
                    <StartDate sDateStore={sDateStore} setSDateStore={setSDateStore} />
                    <EndDate eDateStore={eDateStore} setEDateStore={setEDateStore} />
                </div>
                <div className="flex justify-center gap-5 md:gap-10">
                    <MedicineStatusDropdown medStatus={medStatus} setMedStatus={setMedStatus} />
                    <MedicineTypeDropdown selectedType={selectedType} setType={setSelectedType} />
                </div>
                <div className="flex justify-center gap-5 md:gap-10">
                    <button onClick={onChangeFilter}
                        className="bg-violet-400 hover:bg-violet-500 shadow-md duration-300 text-white max-w-[10rem] px-[3.5rem] cursor-pointer rounded-md">
                        Filter</button>
                    <button onClick={resetFilter}
                        className="bg-violet-400 hover:bg-violet-500 shadow-md duration-300 text-white max-w-[10rem] px-[3.5rem] cursor-pointer rounded-md">
                        Reset</button>
                </div>

            </div>
            {filterData && (
                <div className="px-10 md:flex gap-2 mt-5 -mb-4">
                    <p>Name : <b>{nameS}</b></p>
                    <p>Start Date : <b>{sDateS}</b></p>
                    <p>End Date : <b>{eDateS}</b></p>
                    <p>Status : <b>{medStatus1}</b></p>
                    <p>Type : <b>{selectedType1}</b></p>
                </div>
            )}
            {filterData && filterHistory === null && (
                <>
                    {/* card container */}
                    <div className="grid md:grid-cols-3 mx-4 rounded-lg overflow-x-scroll w-[97%] gap-10 py-10 px-5"
                        style={{ scrollbarWidth: 'none' }}>
                        {/* mapping array data for each card */}
                        {prescriptionHistory.map((card, index) => (
                            <HistoryCard key={index /*`${card.id}-${card.name}`*/}
                                name={card.name} type={card.type} dosage={card.dosage} status={card.status}
                                start={card.startDate} end={card.endDate} freq={card.frequency} />
                        ))}
                    </div>
                </>
            )}
            {filterData && filterHistory && (
                <>
                    {/* card container */}
                    <div className="grid md:grid-cols-3 mx-4 rounded-lg overflow-x-scroll w-[97%] gap-10 py-10 px-5"
                        style={{ scrollbarWidth: 'none' }}>
                        {/* mapping array data for each card */}
                        {prescriptionHistory.map((card, index) => {
                            const startDateOb1 = new Date(sDateS);
                            const startDateOb = new Date(card.startDate);
                            const endDateOb = new Date(card.endDate);
                            const endDateOb1 = new Date(eDateS);
                            return (
                                selectedType1 === card.type ||
                                    ((startDateOb1 <= startDateOb || card.startDate === "N/A") &&
                                        (endDateOb1 >= endDateOb || card.endDate === "N/A")) ||
                                    medStatus1 === card.status ?
                                    <HistoryCard key={index /*`${card.id}-${card.name}`*/}
                                        name={card.name} type={card.type} dosage={card.dosage} status={card.status}
                                        start={card.startDate} end={card.endDate} /> :
                                    <div key={index} className="absolute"></div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}
export default History;