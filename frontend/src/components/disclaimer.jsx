function Disclaimer() {
    return (
        <div className="flex justify-center">
            <div className="shadow-lg bg-red-100 my-10 rounded-[10px] w-[72rem] h-auto pb-8 pt-7 px-8 gap-5 flex flex-col justify-center">
                <p><b className="text-xl my-1">Disclaimer:</b><br/>
                    <b>Prototype version</b>. Please keep the following in mind -<br/>
                    <ol className="list-disc list-inside">
                         <li>Medical Advice: The analysis provided is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider.</li>
                        <li>Scanner Limitations: The scanner works best with digital prescriptions and may struggle with handwritten notes.</li>
                        <li>Temporary Data: All uploaded data is temporary and will be lost if you reload the page. If the app shows an error after a reload, please navigate back to the homepage ( / ).</li>
                    </ol>
                </p>
            </div>
        </div>
    )
}
export default Disclaimer;