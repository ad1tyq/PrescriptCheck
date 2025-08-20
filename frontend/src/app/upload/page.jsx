import FileUploader from "../../components/fileUploader";
import ParentComponent from "../../components/imageToText";
function UploadPage(){
    //<FileUploader/>
    return(
        <>
            <div className="min-h-[30rem]">
                
                <ParentComponent/>
            </div>
            
        </>
    )
}
export default UploadPage;