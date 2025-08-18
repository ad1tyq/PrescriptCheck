import Welcome from "../../components/welcome";
import TestCardContainer from "../../components/testimonialCard";
function HomePage(){
    return(
        <>
        <div className="overflow-y-scroll h-[31rem]" style={{scrollbarWidth: 'none'}}>
            <Welcome/>
            <TestCardContainer/>
        </div>
        </>
    )
}
export default HomePage;