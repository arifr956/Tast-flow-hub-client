import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlink = <>
    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
    <NavLink to={'/contact'}><li><a>Contact</a></li></NavLink>
    <NavLink to={'/review'}><li><a>Review</a></li></NavLink>
    <NavLink to={'/blog'}><li><a>Blog</a></li></NavLink>
    </>
    return(
        <div>
             <div className="navbar bg-red-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlink
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Task Flow Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navlink
     }
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to={'/blog'}><li><a className="btn">Login</a></li></NavLink>
    
  </div>
</div>
        </div>
    )}
export default Navbar;