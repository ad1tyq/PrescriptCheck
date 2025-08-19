import Welcome from "../../components/welcome";
import TestCardContainer from "../../components/testimonialCard";
function HomePage(){
    return(
        <>
        <div className="h-[70vh]">
            <Welcome/>
            <TestCardContainer/>
        </div>
        </>
    )
}
export default HomePage;