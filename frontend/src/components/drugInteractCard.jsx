import { drugInteractInfo } from "../../data/drugInteractInfo";
function DrugInteractInfo() {
    return (
        <>
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[72rem] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <h1 className="text-xl ml-1 -mt-1 font-semibold">Drug Interactions</h1>
                <div>
                    <div className="bg-red-400 flex gap-5">
                        <img src="../../assets/radioactive.svg" alt="high risk" className="h-8 w-8" />
                        <div>
                            <h1 className="text-xl">High Risk Interaction Detected</h1>
                        </div>
                    </div>
                    <div className="bg-amber-300 flex gap-5">
                        <img src="../../assets/exclamation-circle-fill.svg" alt="high risk" className="h-8 w-8" />
                        <div>
                            <h1 className="text-xl">Dosage Warning</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DrugInteractInfo;