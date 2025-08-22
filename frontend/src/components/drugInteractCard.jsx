//import { drugInteractInfo } from "../../data/drugInteractInfo";
import { useInteract } from "../context/InteractContext";
function DrugInteractInfo() {
    const { interact } = useInteract();
    if(!interact || interact.length === 0){
            return (
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[clamp(10rem,80vw,80rem)]
            text-[clamp(0.9rem,1.1vw,1.1rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <p><b>No medication warnings information available. Please upload a prescription first.</b></p>
            </div>
    );
    }
    const drugInteractInfo = interact;
    return (
        <>
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[clamp(10rem,80vw,80rem)]
            h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <h1 className="text-xl ml-1 -mt-1 font-semibold ">Drug Interactions</h1>
                <div className="flex flex-col gap-5">

                    <div className="bg-red-300 flex flex-col justify-center gap-5 p-3 px-1 pb-6 rounded-lg shadow-lg">
                        <div className="flex w-[100%] md:ml-[1.2rem] ml-[0.9rem] mt-2 gap-[5%] md:gap-4">
                            <img src="../../assets/radioactive.svg" alt="high risk" className="h-8 w-8" />
                            <h1 className="text-xl md:mt-[3px] font-semibold hidden md:block text-[clamp(0.9rem,1.2vw,1.2rem)]">High Risk Interaction Detected</h1>
                            <h1 className="text-xl md:mt-[1px] font-semibold md:hidden text-[clamp(0.8rem,1.2vw,1.2rem)]">High Risk
                                <br/>Interaction Detected</h1>
                        </div>
                        {drugInteractInfo.HighRisk.length > 0 ? (
                            drugInteractInfo.HighRisk.map((interaction, index) => {
                                return (
                                    <div key={`hr${index}`} className="md:ml-5 mx-4 text-[clamp(0.9rem,1.1vw,1.1rem)]">
                                        <b>{interaction.med1} + {interaction.med2}
                                            {interaction.med3 && ` + ${interaction.med3}`}:</b> {interaction.message}
                                    </div>
                                )
                            })
                        ) : (
                            <div key={`no-warnings`} className="ml-5 text-[clamp(0.8rem,1.1vw,1.1rem)]">
                                <b>No Warnings</b>
                            </div>
                        )}
                    </div>

                    <div className="bg-amber-100 flex flex-col gap-5 p-3 pb-6 rounded-lg shadow-lg">
                        <div className="flex w-[100%] md:ml-[1rem] ml-[0.5rem] mt-2 gap-[5%] md:gap-4">
                            <img src="../../assets/exclamation-circle-fill.svg" alt="high risk" className="h-8 w-8" />
                            <h1 className="text-xl md:mt-[1px] mt-1 font-semibold text-[clamp(0.9rem,1.2vw,1.2rem)]">Dosage Warning</h1>
                        </div>
                        {drugInteractInfo.DosageWarning.length > 0 ? (
                            drugInteractInfo.DosageWarning.map((dosage, index) => {
                                return (
                                    <div key={`dose${index}`} className="md:ml-5 mx-4 text-[clamp(0.8rem,1.1vw,1.1rem)]">
                                        <b>{dosage.med}:</b> {dosage.message}
                                    </div>
                                )
                            })
                        ) : (
                            <div key={`ok-dose`} className="ml-5 text-[clamp(0.9rem,1.1vw,1.1rem)]">
                                <b>Dosage is fine</b>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
export default DrugInteractInfo;