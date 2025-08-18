function Navbar(){
    return(
        <>
        {/* navbar */}
        <nav className="flex bg-gray-100 text-md px-10 py-5 border-0 border-b-1">
            {/* logo */}
            <a className="text-gray-900 text-2xl" href="/">ScriptCheck</a>
            {/* navbar links */}
            <ul className="flex ml-[clamp(5rem,47vw,47rem)] gap-10">
                <CustomLink href="/upload">Upload Prescription</CustomLink>
                <CustomLink href="/analysis">Medication Analysis</CustomLink>
                <CustomLink href="/history">Medication History</CustomLink>
            </ul>
        </nav>
        </>
    )
}
function CustomLink({href, children, ...props}){
    const path = window.location.pathname;
    return(
        <>
        {/* navbar link component */}
        {/* if active ? css1 : css2 (for every other link) */}
        <li className={path === href ? "text-gray-900 w-[10rem] hover:underline justify-center pt-1 flex" : "hover:text-gray-900 pt-1 hover:underline text-gray-600 w-[10rem] justify-center flex"}>
            <a href={href} {...props}>{children}</a>
        </li>
        </>
    )
}
export default Navbar;