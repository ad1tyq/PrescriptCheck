import { useState } from "react";
function FileUploader({onFileSelect, onPreviewChange}) {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPrev] = useState<string>('');
    const [status, setStatus] = useState<string>("Upload your file!");
    function addFile(e) {
        const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp', 'image/svg', 'image/jpg'];
        
        if (e.target.files) {
            setFile(e.target.files[0]); // file = fileName
            if(onFileSelect){
                onFileSelect(e.target.files[0]);
            }

            // preview :
            if (e.target.files[0].type.startsWith('image/')) {
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
                setStatus("Unsupported file format!");
            }
        }
    }
    return (
        <>
        <div className="flex justify-center items-center mt-16 h-auto">
            <div className="bg-violet-400 rounded-[15px] shadow-lg pt-[1px] px-5 pb-7 w-[35rem] flex flex-col" style={{ alignItems: "center" }}>
                <h1 className="text-3xl text-white  font-bold py-5 ml-0">Upload Your Prescription</h1>
                {/* input area */}
                <div className="flex flex-col rounded-[15px] p-5 w-[30rem] bg-white" style={{ alignItems: "center" }}>
                    <div className="flex flex-col rounded-[15px] w-[25rem] m-5 p-7 border border-violet-200 shadow-md bg-violet-100 cursor-pointer"
                        style={{ alignItems: "center" }}>
                        <img src="../../assets/file-upload-fill.svg" alt="file upload" className="w-10 h-10 m-3" />
                        <p>Drag and drop your files here</p>
                        <input type="file" onChange={addFile}
                            className="bg-violet-300 w-53 p-2 m-3 cursor-pointer rounded-md hover:bg-violet-400 transition duration-100" />
                        {file === null ? <p>{status}</p> : <></>}
                        {file && (
                            <div className="mb-4 text-sm">
                                <p>File name : {file.name}</p>
                                <p>Size : {(file.size / 1024).toFixed(2)} KB</p>
                                <p>File type : {file.type}</p>
                                <button onClick={() => { setFile(null); setStatus("Upload your file!"); }}
                                    className="cursor-pointer bg-violet-300 rounded duration-300 hover:bg-violet-400 m-3 mb-0 ml-0 p-2">Remove File</button>
                            </div>
                        )}
                    </div>
                    <p>Accepted file formats: JPG, JPEG, PNG, WebP & SVG </p>
                </div>
                {file && (
                    <div className="bg-white m-5 p-5 rounded-[15px] w-[30rem]">
                        <h1 className="text-2xl font-bold my-2 ml-0">Upload Confirmation</h1>
                        <div className="flex">
                            <div>
                                <img src={preview} alt="uploaded file"
                                    className="h-15 w-15 mr-5 m-1 border border-gray-400" />
                            </div>
                            <div className="mb-4 text-sm w-[21rem]">
                                <p>File name : {file.name}</p>
                                <p className="font-bold">Uploaded Successfully!!</p>
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