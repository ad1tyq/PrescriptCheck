import React from "react";
import { UserTestimonials } from "../../data/testimonial";

const TestimonialCard = ({image, review}) => {
    // individual card
    return(
        <>
        <div className="min-w-[30rem] h-50 border">
            <img src={image} alt="user testimonial"
            className="h-15 w-15 rounded-[50px] object-cover"/>
            <h3>{review}</h3>
        </div>
        </>
    )
}
function TestCardContainer(){

    return(
        <>
        {/* entire component */}
        <div className="flex flex-col">
            <h1 className="text-xl">User Testimonials</h1>
            {/* card container */}
            <div className="flex overflow-x-scroll w-[100%] gap-10 py-10 px-5 bg-gray-200"
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