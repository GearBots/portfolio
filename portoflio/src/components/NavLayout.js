import { NavLink, Outlet, Link } from 'react-router-dom';

import React from 'react';
import '../App.css'; 
const NavLayout = () => {
    return (
        <div>
            <header>
                <nav class="bg-sky-500 border-blue-200 px-2 sm:px-4 py-2.5 dark:bg-sky-700 items-center justify-end hidden w-full md:flex md:w-auto md:order-1">
                    <NavLink to="/" class="block py-2 px-3 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-700 mr-1.5">home</NavLink>
                    <Link to="/about" class="block py-2 px-3 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-700 mr-1.5">about</Link>
                    <Link to="/skills" class="block py-2 px-3 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-700 mr-1.5">skills</Link>
                    <Link to="/projects" class="block py-2 px-3 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-700">projects</Link>
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