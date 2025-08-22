import { Link, useMatch, useResolvedPath } from "react-router-dom";
function Navbar(){
    return(
        <>
        {/* navbar */}
        <nav className="flex justify-between bg-violet-500 text-md mb-[clamp(0rem,4vh,4rem)] py-[clamp(0.9rem,1.4vh,1.4rem)] px-[clamp(0.8rem,1.4vw,1.4rem)]">
            {/* logo */}
            <Link to="/" className="text-white font-bold text-[clamp(1rem,1.6vw,1.6rem)]">PrescriptCheck</Link>
            {/* navbar links */}
            <ul className="flex ml-[0rem] gap-[clamp(1.5rem,4vw,4rem)]">
                <CustomLink to="/upload">Upload Prescription</CustomLink>
                <CustomLink to="/analysis">Medication Analysis</CustomLink>
                <CustomLink to="/history">Medication History</CustomLink>
            </ul>
        </nav>
        </>
    )
}
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return(
        <>
        {/* navbar link component */}
        {/* if active ? css1 : css2 (for every other link) */}

        <li className={isActive ? "text-white font-bold duration-50 text-[clamp(0.5rem,1vw,1rem)] w-[clamp(3rem,10vw,10rem)] justify-center pt-1 flex" : "text-white hover:font-bold pt-1 duration-50 w-[clamp(3rem,10vw,10rem)] text-[clamp(0.5rem,1vw,1rem)] justify-center flex"}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        </>
    )
}
export default Navbar;