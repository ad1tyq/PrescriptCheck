import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";
function Navbar(){
    return(
        <>
        {/* navbar */}
        <nav className="flex justify-between bg-violet-500 text-md p-5">
            {/* logo */}
            <Link to="/" className="text-white font-bold text-2xl">PrescriptCheck</Link>
            {/* navbar links */}
            <ul className="flex ml-[clamp(5rem,46vw,46rem)] gap-10">
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

        <li className={isActive ? "text-white font-bold duration-50 w-[10rem] justify-center pt-1 flex" : "text-white hover:font-bold pt-1 duration-50 w-[10rem] justify-center flex"}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        </>
    )
}
export default Navbar;