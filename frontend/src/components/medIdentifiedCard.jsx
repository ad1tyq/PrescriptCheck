import { useMedInfo } from "../context/MedInfoContext";
function MedIndentifiedInfo() {
    const { medinfo } = useMedInfo(); // Get the data from context
    if (!medinfo || medinfo.length === 0) {
        return (
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[clamp(10rem,80vw,80rem)]
            text-[clamp(0.9rem,1.1vw,1.1rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <p><b>No medications available. Please upload a prescription first.</b></p>
            </div>
    );
    }
    // console.log("analysis page med info :\n",medinfo); // runs twice cause react strict mode
    return (
        <>
            <div className="shadow-lg bg-gray-100 mt-10 rounded-[10px] w-[clamp(10rem,80vw,80rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
                <h1 className="text-xl ml-1 -mt-1 font-semibold">Identified Medications</h1>
                <div className="grid md:grid-cols-3 gap-10">
                    {medinfo.map((medata, index) => (
                            <div key={index}>
                                <div className="w-[100%] rounded-lg shadow-lg overflow-y-scroll h-auto bg-white p-5 pt-3"
                                    style={{ scrollbarWidth: "none" }}>
                                    <h1 className="font-bold text-lg">{medata.name}</h1>
                                    <p className="text-sm">Type: {medata.type}</p>
                                    <p className="text-sm">Dosage: {medata.dosage}</p>
                                    <p className="text-sm">Frequency: {medata.frequency}</p>
                                    <p className="text-sm">Status: {medata.status}</p>
                                </div>
                            </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default MedIndentifiedInfo;