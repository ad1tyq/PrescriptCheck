import { drugInteractInfo } from "../../data/drugInteractInfo";
function DrugInteractInfo() {
    return (
        <>
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[72rem] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <h1 className="text-xl ml-1 -mt-1 font-semibold">Drug Interactions</h1>
                <div className="flex flex-col gap-5">

                    <div className="bg-red-300 flex flex-col gap-5 p-3 pb-6 rounded-lg shadow-lg">
                        <div className="flex justify-center w-[21rem] ml-4 mt-2 gap-5">
                            <img src="../../assets/radioactive.svg" alt="high risk" className="h-8 w-8" />
                            <h1 className="text-xl mt-[0.7px] font-semibold">High Risk Interaction Detected</h1>
                        </div>
                        {drugInteractInfo.HighRisk.map((interaction, index) => {
                            return (
                                    <div key={`hr${index}`} className="ml-5">
                                        {interaction.med1} + {interaction.med2}
                                        {interaction.med3 && ` + ${interaction.med3}`}: {interaction.message}
                                    </div>
                            )
                        })}
                    </div>

                    <div className="bg-amber-100 flex flex-col gap-5 p-3 pb-6 rounded-lg shadow-lg">
                        <div className="flex justify-center w-[13rem] ml-4 mt-2 gap-5">
                            <img src="../../assets/exclamation-circle-fill.svg" alt="high risk" className="h-8 w-8" />
                            <h1 className="text-xl mt-[0.7px] font-semibold">Dosage Warning</h1>
                        </div>
                        {drugInteractInfo.DosageWarning.map((dosage, index) => {
                            return (
                                    <div key={`dose${index}`} className="ml-5">
                                        {dosage.med}: {dosage.message}
                                    </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}
export default DrugInteractInfo;