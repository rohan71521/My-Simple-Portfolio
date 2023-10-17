import { NavLink } from "react-router-dom";
import { CiMenuBurger } from 'react-icons/ci';
import { useState } from "react";
import './NavB.css'
 
export default function NavB(){
    const [toggleMenu, setToggleMenu] = useState(false);
    

    return(
        <div className="max-w-7xl mx-auto px-2 md:px-5 h-20">
            <div className="border-b-2 border-red-50 h-full w-full
            flex justify-between items-center">
            <div id="log"
            className="text-xl  lg:text-4xl font-bold uppercase"
            ><span className="text-[#7bdbab] text-5xl lg:text-6xl md:text-4xl">R</span>ohan</div>
            <div onClick={()=>setToggleMenu(!toggleMenu)}
            className="md:hidden"><CiMenuBurger></CiMenuBurger></div>
            <div id="center-nav"
            className={`${toggleMenu ===true ? '' : 'hidden'} flex gap-1 md:gap-3 capitalize flex-col md:flex-row absolute
            md:static right-4 top-20 text-right bg-gray-900 md:bg-transparent p-3
            md:p-0 rounded`}>
               
                <NavLink to="/" activeClassName="active" exact>home</NavLink>
                <NavLink to="/about" activeClassName="active">about me</NavLink>
                <NavLink to="/services" activeClassName="active">services</NavLink>
                <NavLink to="/portfolio" activeClassName="active">portfolio</NavLink>
                <NavLink to="/pricing" activeClassName="active">pricing</NavLink>
                <NavLink to="/contact" activeClassName="active">contact me</NavLink>
            </div>
            <div id="center-nav"
            className=" capitalize hidden md:block space-x-3">
               
                <NavLink to="/" activeClassName="active" exact>home</NavLink>
                <NavLink to="/about" activeClassName="active">about me</NavLink>
                <NavLink to="/services" activeClassName="active">services</NavLink>
                <NavLink to="/portfolio" activeClassName="active">portfolio</NavLink>
                <NavLink to="/pricing" activeClassName="active">pricing</NavLink>
                <NavLink to="/contact" activeClassName="active">contact me</NavLink>
            </div>
            <div id="right-nav" 
            className="hidden md:block capitalize px-"> 
                <h3
                className="bg-gradient-to-r from-[#14633c] to-black
                px-4 py-2 rounded md:px-2"
                >get an appointment →</h3>
            </div>
            </div>
        </div>
    )
}