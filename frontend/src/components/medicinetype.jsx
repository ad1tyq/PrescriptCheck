import { medicineTypes } from "../../data/medicineTypes";
function MedicineTypeDropdown({selectedType, setType}){
    function onTypeChange(e){
        setType(e.target.value);
    }
    return(
        <>
        <select value={selectedType} onChange={onTypeChange} className="p-2 border max-w-[10rem] rounded-md">
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