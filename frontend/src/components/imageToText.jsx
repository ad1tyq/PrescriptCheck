import { useState } from "react";
import FileUploader from "./fileUploader";
import AnalyseText from "./analyseText";
function ParentComponent() {
    const OMR_IMG_SCANNER_API_KEY = import.meta.env.VITE_OMR_IMG_SCANNER_API_KEY;
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [ocrResult, setOcrResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const handlePreviewChange = (preview) => {
        setPreviewUrl(preview);
    };

    const handleOcrProcessing = async () => {
        if (!selectedFile) {
            alert("Please upload a file first!");
            return;
        }

        setIsLoading(true);

        try {
            // Create FormData for the API call
            const formData = new FormData();
            formData.append('apikey', OMR_IMG_SCANNER_API_KEY);

            // If you want to use the file directly (recommended)
            formData.append('file', selectedFile);

            // if you want to use the base64 URL (alternative approach)
            // Note: OCR.space might not accept base64 directly in the 'url' field
            // formData.append('url', previewUrl);

            formData.append('language', 'eng');
            formData.append('isOverlayRequired', 'false');
            formData.append('iscreatesearchablepdf', 'false');
            formData.append('issearchablepdfhidetextlayer', 'false');

            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log("text:\n",data);
            setOcrResult(data);
        } catch (error) {
            console.error('Error:', error);
            alert("OCR processing failed: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <FileUploader
                onFileSelect={handleFileSelect}
                onPreviewChange={handlePreviewChange}
            />

            {previewUrl && (
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handleOcrProcessing}
                        disabled={isLoading}
                        className="bg-violet-400 hover:bg-violet-500 text-white cursor-pointer px-4 py-2 rounded mt-2"
                    >
                        {isLoading ? "Scanning..." : "Scan Image"}
                    </button>
                </div>
            )}

            {ocrResult && (
                <AnalyseText text={JSON.stringify(ocrResult.ParsedResults[0].ParsedText, null, 2)}/>
            )}
        </div>
    );
}

export default ParentComponent;