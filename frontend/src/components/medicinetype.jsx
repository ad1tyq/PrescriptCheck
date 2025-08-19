import React, { useState } from 'react';
function MedicineTypeDropdown({selectedType, setType}){
    const medicineTypes = [
    'antibiotic',
    'pain-reliever',
    'cholesterol',
    'blood-pressure',
    'diabetes',
    'asthma',
    'allergy',
    'cough'
    ];
    function onTypeChange(e){
        setType(e.target.value);
    }
    return(
        <>
        <select value={selectedType} onChange={onTypeChange} className="p-2 border rounded-md">
            <option value="">Select type</option>
            {medicineTypes.map((type)=>(
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
        </>
    )
}
export default MedicineTypeDropdown;