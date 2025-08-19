function Footer(){
    return(
        <>
        <div className="absolute w-[100%] h-[15%] bottom-0 bg-violet-400 flex flex-wrap justify-between">
            <div className="flex-auto text-white mt-6 ml-10">
                <a href="/" className="font-semibold mb-3 text-xl">About ScriptCheck</a>
                <p>ScriptCheck is dedicated to providing users with the most reliable prescription management tools. Our mission is to ensure medication safety and efficiency.</p>
            </div>
            <div className="flex-auto mt-6 text-white">
                <h1 className="font-semibold text-lg">Contact Us</h1>
                <p>Email: support@prescriptcheck.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
        </>
    )
}
export default Footer;