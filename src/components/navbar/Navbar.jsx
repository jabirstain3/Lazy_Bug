import { NavLink } from "react-router-dom";

const links = <>
                <li className=""><NavLink to="/" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Home</NavLink></li>
                <li className=""><NavLink to="/registration" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Registration</NavLink></li>
                <li className=""><NavLink to="/login" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Log In</NavLink></li>
                <li className=""><NavLink to="/profile" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Profile</NavLink></li>
            </>
            



const Navbar = () => {
    return (
        <div className="border w-full flex item-center justify-between mx-auto" >
            <div className="justify-content-between border w-1/2 sm:w-1/3">
                <a href="#" className="logo">MILSTONE-51</a>
            </div>
            <ul className={`border flex md:gap-5 lg:gap-8 items-center w-1/2 md:w-auto  md:text-md lg:text-xl font-medium `} >
                {links}
            </ul>   
        </div>
    );
};


export default Navbar;