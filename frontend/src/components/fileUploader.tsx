import { useState } from "react";
function FileUploader({ onFileSelect, onPreviewChange }) {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPrev] = useState<string>('');
    const [status, setStatus] = useState<string>("Upload your file!");
    function addFile(e) {
        const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp', 'image/svg', 'image/jpg'];

        if (e.target.files) {
            setFile(e.target.files[0]); // file = fileName
            if (onFileSelect) {
                onFileSelect(e.target.files[0]);
            }

            // preview :
            if (e.target.files[0].type.startsWith('image/')) {
                if (parseFloat((e.target.files[0].size / 1024).toFixed(2)) <= 1000) {
                    if (ACCEPTED_FORMATS.includes(e.target.files[0].type)) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            if (typeof reader.result === 'string') {
                                setPrev(reader.result);
                                onPreviewChange(reader.result);
                            }
                        };
                        reader.readAsDataURL(e.target.files[0]);
                    }
                } else {
                    setFile(null);
                    setPrev('');
                    setStatus(`File exceeded size limit!`);
                }
            } else {
                setFile(null);
                setPrev('');
                setStatus("Unsupported file format!");
            }
        }
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-[100vh]">
                <div className="bg-violet-400 rounded-[15px] shadow-lg pt-[1px] px-5 pb-7 w-[clamp(20rem,35vw,35rem)] flex flex-col" style={{ alignItems: "center" }}>
                    <h1 className="text-[clamp(1.1rem,2vw,2rem)] text-white font-bold py-5 ml-0">Upload Your Prescription</h1>
                    {/* input area */}
                    <div className="flex flex-col rounded-[15px] p-5 w-[clamp(16rem,30vw,30rem)] bg-white" style={{ alignItems: "center" }}>
                        <div className="flex flex-col rounded-[15px] w-[clamp(12rem,25vw,25rem)] m-5 p-7 border border-violet-200 shadow-md bg-violet-100 cursor-pointer"
                            style={{ alignItems: "center" }}>
                            <img src="../../assets/file-upload-fill.svg" alt="file upload"
                            className="w-[clamp(2rem,3vw,3rem)] h-[clamp(2rem,3vw,3rem)] m-3" />
                            <p className="text-[clamp(0.7rem,1vw,1rem)] text-center">Drag and drop your files here</p>
                            <input type="file" onChange={addFile}
                                className="bg-violet-300 w-[clamp(8rem,12vw,12rem)] p-2 m-3 text-[clamp(0.8rem,1vw,1rem)] cursor-pointer rounded-md hover:bg-violet-400 transition duration-100" />
                            {file === null ? <p className="text-[clamp(0.7rem,1vw,1rem)]">{status}</p> : <></>}
                            {file && (
                                <div className="mb-4 text-sm">
                                    <p className="text-[clamp(0.8rem,1vw,1rem)]">File name : {file.name}</p>
                                    <p className="text-[clamp(0.8rem,1vw,1rem)]">Size : {(file.size / 1024).toFixed(2)} KB</p>
                                    <p className="text-[clamp(0.8rem,1vw,1rem)]">File type : {file.type}</p>
                                    <button onClick={() => { setFile(null); setStatus("Upload your file!"); }}
                                        className="cursor-pointer bg-violet-300 rounded duration-300 hover:bg-violet-400 m-3 mb-0 ml-0 p-2 text-[clamp(0.7rem,1vw,1rem)]">Remove File</button>
                                </div>
                            )}
                        </div>
                        <p className="text-[clamp(0.8rem,1vw,1rem)] text-center md:hidden">Accepted file formats:<br/>JPG, JPEG, PNG, WebP & SVG</p>
                        <p className="text-[clamp(0.8rem,1vw,1rem)] hidden md:block">Accepted file formats: JPG, JPEG, PNG, WebP & SVG</p>
                        <p className="text-[clamp(0.8rem,1vw,1rem)]">Maximum file size: <b>1MB</b></p>
                    </div>
                    {file && preview && (
                        <div className="bg-white m-5 p-5 rounded-[15px] w-[clamp(16rem,30vw,30rem)]">
                            <h1 className="text-[clamp(1.1rem,1.5vw,1.5rem)] font-bold my-2 ml-1">Upload Confirmation</h1>
                            <div className="flex">
                                <div>
                                    <img src={preview} alt="uploaded file"
                                        className="h-15 w-15 mr-5 m-1 border border-gray-400" />
                                </div>
                                <div className="mb-4 hidden md:block text-sm w-[21rem]">
                                    <p>File name : {file.name}</p>
                                    <p className="font-bold">Uploaded Successfully!!</p>
                                </div>
                                <div className="mb-4 ml-4 mt-1 md:hidden text-sm w-[21rem]">
                                    <p className="text-[0.8rem]">File name :<br/>{file.name}</p>
                                    <p className="font-bold text-[0.8rem]">Uploaded Successfully!!</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}
export default FileUploader;