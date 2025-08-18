import UploadPage from "../app/upload/page.jsx"
function Welcome(){

    return(
        <>
        <div className="flex flex-col">
            <h1 className="text-xl">Welcome to ScriptCheck</h1>
            <p>Discover a seamless way to manage your prescriptions and ensure medication safety. Our app offers detailed interaction checks, medication timelines, and comprehensive history tracking.</p>
            <button className="bg-gray-300 w-[12%] p-2 cursor-pointer" onClick={()=>window.location.pathname = "/upload"}>Upload Prescription</button>
        </div>
        </>
    )
}
export default Welcome;