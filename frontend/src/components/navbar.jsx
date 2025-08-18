function Navbar(){
    return(
        <>
        <nav className="flex bg-gray-100 text-xl px-10 py-5 border-0 border-b-1">
            <a className="text-gray-900 text-3xl" href="/">ScriptCheck</a>
            <ul className="flex ml-204">
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
        <li className={path === href ? "text-gray-900 w-[17rem] hover:underline justify-center pt-1 flex" : "hover:text-gray-900 pt-1 hover:underline text-gray-600 w-[17rem] justify-center flex"}>
            <a href={href} {...props}>{children}</a>
        </li>
        </>
    )
}
export default Navbar;