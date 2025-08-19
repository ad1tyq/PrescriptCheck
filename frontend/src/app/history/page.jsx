import History from "../../components/historyCard";
function HistoryPage(){
    return(
        <>
        <div className="min-h-[30rem]">
            <h1 className="text-3xl ml-10 font-bold py-5">Medication History</h1>
            <History/>
        </div>
        </>
    )
}
export default HistoryPage;