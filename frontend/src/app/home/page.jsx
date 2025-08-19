import Welcome from "../../components/welcome";
import TestCardContainer from "../../components/testimonialCard";
function HomePage(){
    return(
        <>
        <div className="min-h-[40vw]">
            <Welcome/>
            <TestCardContainer/>
        </div>
        </>
    )
}
export default HomePage;