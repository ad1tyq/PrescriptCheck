import { patientinfo } from "../../data/patientInfo";
function PatientInfo(){
    return(
        <>
        <div className="shadow-lg bg-gray-100 rounded-[10px] w-[72rem] h-[10rem] gap-5 flex flex-col justify-center">
            <h1 className="text-xl ml-9 -mt-1 font-semibold">Patient Information</h1>
            <div className="flex gap-5">
                {patientinfo.map((card, index)=>(
                    <div key={index}>
                        <div className="flex w-[15rem] ml-5 justify-center gap-6" style={{alignItems: "center"}}>
                        <img src={card.image} alt="name" className="w-8 h-8 bg-gray-300 p-[6px] rounded-[20px]"
                            style={{ transform: "scale(1.4)" }}/>
                            <div>
                            <p>{card.data.line1}</p>
                            <p className="font-bold">{card.data.line2}</p>
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