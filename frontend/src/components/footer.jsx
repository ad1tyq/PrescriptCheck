function Footer(){
    return(
        <>
        <div className="w-[100%] mt-10 md:h-[7rem] bg-violet-500 h-[30vh] flex flex-wrap justify-between">
            {/* desktop */}
            <div className="flex-auto text-white mt-[clamp(1rem,1.4vw,1.4rem)] hidden md:block ml-10">
                <a href="/" className="font-semibold mb-3 text-xl">About PrescriptCheck</a>
                <p className="text-sm mt-1">PrescriptCheck is dedicated to providing users with the most reliable prescription management tools. Our mission is to ensure medication safety and efficiency.</p>
            </div>
            {/* mobile */}
            <div className="flex-auto text-white md:hidden mt-[1.6rem] lg:ml-10">
                <a href="/" className="font-semibold mb-3 text-xl ml-5">About PrescriptCheck</a>
                <p className="text-xs mt-1 ml-5 w-[90vw]">PrescriptCheck is dedicated to providing users with the most reliable prescription management tools. Our mission is to ensure medication safety and efficiency.</p>
            </div>
            {/* desktop */}
            <div className="flex-auto hidden md:block mt-[clamp(1rem,1vw,1rem)] text-white">
                <h1 className="font-semibold text-lg">Contact Us</h1>
                <p className="text-sm">Email: support@prescriptcheck.com</p>
                <p className="text-sm">Phone: +91 620 054 6831</p>
            </div>
            {/* mobile */}
            <div className="flex-auto md:hidden ml-5 -mt-5 text-white">
                <h1 className="font-semibold text-lg">Contact Us</h1>
                <p className="text-sm">Email: support@prescriptcheck.com</p>
                <p className="text-sm">Phone: +91 620 054 6831</p>
            </div>
        </div>
        </>
    )
}
export default Footer;