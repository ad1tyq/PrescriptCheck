import React, { useState } from 'react';
function MedicineStatusDropdown({medStatus, setMedStatus}){
    const medicinestatus = [
        'active',
        'completed',
    ];
    function onStatusChange(e){
        setMedStatus(e.target.value);
    }
    return(
        <>
        <select value={medStatus} onChange={onStatusChange} className="p-2 border max-w-[10rem] rounded-md">
            <option value="">Select Status</option>
            {medicinestatus.map((status)=>(
                <option key={status} value={status}>
                    {status}
                </option>
            ))}
        </select>
        </>
    )
}
export default MedicineStatusDropdown;