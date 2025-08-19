function Navbar(){
    return(
        <>
        {/* navbar */}
        <nav className="flex justify-between bg-violet-500 text-md p-5">
            {/* logo */}
            <a className="text-white font-semibold text-2xl" href="/">PrescriptCheck</a>
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

        <li className={path === href ? "text-white font-bold duration-50 w-[10rem] justify-center pt-1 flex" : "text-white hover:font-bold pt-1 duration-50 w-[10rem] justify-center flex"}>
            <a href={href} {...props}>{children}</a>
        </li>
        </>
    )
}
export default Navbar;