import { patientinfo } from "../../data/patientInfo";
function PatientInfo(){
    return(
        <>
        <div className="shadow-lg bg-gray-100 rounded-[10px] w-[clamp(10rem,80vw,80rem)] overflow-x-scroll h-[11rem] gap-5 flex flex-col justify-center">
            <div className="flex gap-3 items-center">
                <h1 className="text-[clamp(1.2rem,1.5vw,1.5rem)] ml-9 -mt-1 font-semibold">Patient Information</h1>
                <img src="../../assets/arrow-right-line.svg" className=" h-[1rem]"/>
            </div>
            <div className="flex gap-5 overflow-x-scroll" style={{scrollbarWidth:"none"}}>
                {patientinfo.map((card, index)=>(
                    <div key={index}>
                        <div className="flex w-[clamp(10rem,15vw,15rem)] ml-5 justify-center gap-6" style={{alignItems: "center"}}>
                        <img src={card.image} alt="name" className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] bg-gray-300 p-[6px] rounded-[20px]"
                            style={{ transform: "scale(1.4)" }}/>
                            <div>
                            <p className="text-[clamp(0.9rem,1.1vw,1.1rem)]">{card.data.line1}</p>
                            <p className="font-bold text-[clamp(0.9rem,1.1vw,1.1rem)]">{card.data.line2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    )
}
export default PatientInfo;