import React from "react";
import { UserTestimonials } from "../../data/testimonial";

const TestimonialCard = ({image, review}) => {
    // individual card
    return(
        <>
        <div className="min-w-[30rem] shadow-lg rounded-lg overflow-y-scroll h-50 bg-gray-100 p-5 pt-3" style={{scrollbarWidth:"none"}}>
            <img src={image} alt="user testimonial"
            className="h-15 ml-5 my-4 w-15 rounded-[50px] object-cover"/>
            <h3 className="mx-4 mt-2">{review}</h3>
        </div>
        </>
    )
}
function TestCardContainer(){

    return(
        <>
        {/* entire component */}
        <div className="flex flex-col">
            <h1 className="text-lg ml-10 -mb-5 text-[clamp(1.5rem,2vw,2rem)] font-semibold">User Testimonials</h1>
            {/* card container */}
            <div className="flex mx-4 rounded-lg overflow-x-scroll w-[97%] gap-10 py-10 px-5"
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