import PatientInfo from "./patientInfoCard.jsx";
import MedIndentifiedInfo from "./medIdentifiedCard.jsx";
import DrugInteractInfo from "./drugInteractCard.jsx";
function Analysis() {
    return (
        <>
        <h1 className="text-[clamp(1.3rem,2vw,2rem)] ml-[clamp(1rem,6vw,6rem)] -mt-8 font-bold py-8">Prescription Analysis Report</h1>
        <div className="w-[100%] flex flex-col justify-center" style={{alignItems: "center"}}>
            <PatientInfo/>
            <MedIndentifiedInfo/>
            <DrugInteractInfo/>
        </div>
        </>
    )
}
export default Analysis;