import { useEffect } from "react";
import { useHistory } from "../context/HistoryContext.jsx";
import { useCheckInteract } from "../context/CheckInteractContext.jsx";

export function UpdateHistory(){
    const { prescriptionHistory } = useHistory();
    const { setCheckInteract } = useCheckInteract();
    useEffect(()=>{
            const allMedicines = prescriptionHistory.flat().filter(medicine => medicine.status === 'active');
            const medicineNames = allMedicines.map(medicine => medicine.name);
            const medicineNamesString = medicineNames.join(); // console.log(medicineNamesString);
            setCheckInteract(medicineNamesString); // giving medicine names for drug interaction test
        },[prescriptionHistory])
    if (!prescriptionHistory || prescriptionHistory.length === 0){
        return (
            <></>
    );
    }
}