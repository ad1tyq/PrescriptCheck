function Footer(){
    return(
        <>
        <div className="w-[100%] mt-10 h-[7rem] bg-violet-500 flex flex-wrap justify-between">
            <div className="flex-auto text-white mt-[clamp(1rem,1.4vw,1.4rem)] ml-10">
                <a href="/" className="font-semibold mb-3 text-xl">About PrescriptCheck</a>
                <p className="text-sm mt-1">PrescriptCheck is dedicated to providing users with the most reliable prescription management tools. Our mission is to ensure medication safety and efficiency.</p>
            </div>
            <div className="flex-auto mt-[clamp(1rem,1vw,1rem)] text-white">
                <h1 className="font-semibold text-lg">Contact Us</h1>
                <p className="text-sm">Email: support@prescriptcheck.com</p>
                <p className="text-sm">Phone: +1 234 567 890</p>
            </div>
        </div>
        </>
    )
}
export default Footer;