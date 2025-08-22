function Disclaimer() {
    return (
        <div className="flex justify-center">
            <div className="shadow-xl bg-red-100 my-10 rounded-[10px] w-[85vw] h-auto pb-8 pt-7 px-8 gap-2 flex flex-col justify-center">
                <b className="text-[1.5rem] my-[0.1rem]">Disclaimer:</b><br/>
                    <p className="text-[clamp(0.8rem,1vw,1rem)]"><b>Prototype version.</b> Please keep the following in mind -</p><br/>
                    <ol className="list-disc pl-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.8rem,1vw,1rem)]">
                         <li>Medical Advice: The analysis provided is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider.</li>
                        <li>Scanner Limitations: The scanner works best with digital prescriptions and may struggle with handwritten notes.</li>
                        <li>Temporary Data: All uploaded data is temporary and will be lost if you reload the page. If the app shows an error after a reload, please navigate back to the homepage ( / ).</li>
                    </ol>
            </div>
        </div>
    )
}
export default Disclaimer;