import { useState } from "react";
function FileUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPrev] = useState<string>('');
    function addFile(e) {
        if (e.target.files) {
            setFile(e.target.files[0]); // file = fileName

            // preview :
            if (e.target.files[0].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    if (typeof reader.result === 'string') {
                        setPrev(reader.result);
                    }
                };
                reader.readAsDataURL(e.target.files[0]);
            } else {
                setPrev('');
            }
        }

        console.log(e.target.files[0])
    }
    return (
        <>
            <div className="bg-gray-300 rounded-[15px] pt-[1px] px-5 pb-7 w-[35rem] flex flex-col" style={{ alignItems: "center" }}>
                <h1 className="text-3xl font-bold py-5 ml-0">Upload Your Prescription</h1>
                {/* input area */}
                <div className="flex flex-col rounded-[15px] p-5 w-[30rem] bg-white" style={{ alignItems: "center" }}>
                    <div className="flex flex-col rounded-[15px] w-[25rem] m-5 p-7 border border-gray-300 bg-gray-100 cursor-pointer"
                    style={{ alignItems: "center" }}>
                        <img src="../../assets/file-upload-fill.svg" alt="file upload" className="w-10 h-10 m-3" />
                        <p>Drag and drop your files here</p>
                        <input type="file" onChange={addFile}
                        className="bg-gray-300 w-53 p-2 m-3 cursor-pointer hover:bg-gray-400 transition duration-100" />
                        {file && (
                            <div className="mb-4 text-sm">
                                <p>File name : {file.name}</p>
                                <p>Size : {(file.size / 1024).toFixed(2)} KB</p>
                                <p>File type : {file.type}</p>
                                <button onClick={() => { setFile(null) }}
                                className="cursor-pointer bg-gray-300 hover:bg-gray-400 m-3 mb-0 ml-0 p-2">Remove File</button>
                            </div>
                        )}
                    </div>
                    <p>Accepted file formats: JPG, PNG</p>
                </div>
                {/* upload confirmation */}
                {file && (
                    <div className="bg-white m-5 p-5 rounded-[15px] w-[30rem]">
                        <h1 className="text-2xl font-bold my-2 ml-0">Upload Confirmation</h1>
                        <div className="flex">
                            <div>
                                <img src={preview} alt="uploaded file"
                                className="h-15 w-15 mr-5 m-1 border border-gray-400"/>
                            </div>
                            <div className="mb-4 text-sm">
                            <p>File name : {file.name}</p>
                            <p className="font-bold">Uploaded Successfully!!</p>
                            </div>
                        </div>
                        
                    </div>
                )}

            </div>


        </>
    )
}
export default FileUploader;