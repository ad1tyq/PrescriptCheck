import FileUploader from "../../components/fileUploader";
function UploadPage(){
    return(
        <>
            <div className="overflow-y-scroll h-[31rem]" style={{scrollbarWidth: 'none'}}>
                <FileUploader/>
            </div>
            
        </>
    )
}
export default UploadPage;