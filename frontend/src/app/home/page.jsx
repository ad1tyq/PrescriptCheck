import Welcome from "../../components/welcome";
import TestCardContainer from "../../components/testimonialCard";
import Disclaimer from "../../components/disclaimer";
function HomePage(){
    return(
        <>
        <div className="min-h-[70vh]">
            <Welcome/>
            <TestCardContainer/>
            <Disclaimer/>
        </div>
        </>
    )
}
export default HomePage;