import React from "react";
import { UserTestimonials } from "../../data/testimonial";

const TestimonialCard = ({image, review}) => {
    // individual card
    return(
        <>
        <div className="w-[85vw] md:min-w-[25rem] mt-10 md:mt-0 lg:md-0 shadow-xl rounded-lg overflow-y-scroll md:h-[14rem] h-auto bg-gray-100 p-5 pt-3" style={{scrollbarWidth:"none"}}>
            <img src={image} alt="user testimonial"
            className="h-[clamp(3rem,4vw,4rem)] ml-2 my-4 w-[clamp(3rem,4vw,4rem)] rounded-[50px] object-cover"/>
            <h3 className="mx-[0.3rem] text-[clamp(0.8rem,1vw,1rem)] w-[98%] my-2">{review}</h3>
        </div>
        </>
    )
}
function TestCardContainer(){

    return(
        <>
        {/* entire component */}
        <div className="flex flex-col">
            <h1 className="text-lg ml-[clamp(1.6rem,3vw,3rem)] -mb-[4rem] md:-mb-[1rem] lg:-mb-[1rem] text-[clamp(1.5rem,2vw,2rem)] font-semibold">User Testimonials</h1>
            {/* card container */}
            <div className="lg:flex mx-4 rounded-lg py-[3rem] overflow-x-scroll w-[97%] gap-10 sm:grid px-[clamp(0rem,3vw,3rem)]"
            style={{scrollbarWidth: 'none'}}>
                {/* mapping array data for each card */}
                {UserTestimonials.map((card) => (
                    <TestimonialCard key={card.id} image={card.image} review={card.review}/>
                ))}
            </div>
        </div>
        </>
    )
}
export default TestCardContainer;