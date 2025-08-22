import { useNavigate } from "react-router-dom";
function Welcome() 
{
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col mx-[clamp(1.6rem,3vw,3rem)] mb-10">
                <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold">Welcome to PrescriptCheck</h1>
                <p className="mb-1 text-[clamp(10px,_1vw,_2vw)] mt-1">Discover a seamless way to manage your prescriptions and ensure medication safety. Our app offers detailed interaction checks, medication timelines, and comprehensive history tracking.</p>
                <button className="bg-violet-400 w-fit cursor-pointer text-[clamp(10px,_1vw,_2vw)] py-2 px-4 rounded-md font-medium text-white mt-2 duration-300 hover:bg-violet-500 shadow-md"
                onClick={() => navigate("/upload")}>Upload Prescription</button>
            </div>
        </>
    );
}

export default Welcome;