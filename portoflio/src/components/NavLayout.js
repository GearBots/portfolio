import { NavLink, Outlet, Link } from 'react-router-dom';

import React from 'react';
import '../App.css'; 
const NavLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/" className="navbar">home</NavLink>
                    <Link to="/about" className="navbar">about</Link>
                    <Link to="/projects" className="navbar">projects</Link>
                    {/* THIS CODE IS FOR EMOJI THAT ARE MY LINKS TO LINKDIN GITHUB
                    <NavLink></NavLink> 
                    */}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            
        </div>
    );
};

export default NavLayout;