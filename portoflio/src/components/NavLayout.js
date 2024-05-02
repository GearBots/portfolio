import { NavLink, Outlet, Link } from 'react-router-dom';

import React from 'react';
import '../App.css'; 
import logo from '../assets/KGlogo.png'
import github from '../assets/github-mark-white.png'
import linkedin from '../assets/LI-In-Bug.png'
const NavLayout = () => {
    return (
        <div>
            <header>
                <nav class="flex items-center justify-between bg-zinc-800 border-blue-200 px-2 sm:px-4 py-2.5 dark:bg-zinc-800 w-full">
                    <div class="flex items-center"> 
                        <img src={logo} alt="logo" className='w-12 h-12' />
                        <div class="flex items-center ml-4"> 
                            <Link to="/" class="block py-2 px-3 text-blue-900 rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-zinc-400 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-900 mr-1.5">home</Link>
                            <Link to="/about" class="block py-2 px-3 text-blue-900 rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-zinc-400 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-900 mr-1.5">about</Link>
                            <Link to="/skills" class="block py-2 px-3 text-blue-900 rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-zinc-400 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-900 mr-1.5">skills</Link>
                            <Link to="/projects" class="block py-2 px-3 text-blue-900 rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-zinc-400 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-900 mr-1.5">projects</Link>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img src={github} alt="github" className='w-7 h-7 mr-2' onClick={() => window.open('https://github.com/GearBots')} style={{cursor: 'pointer'}} ></img>
                        <img src={linkedin} alt="linkedin" className='w-8 h-7 mr-2' onClick={() => window.open('https://linkedin.com/in/kyle-geary221')} style={{cursor: 'pointer'}}></img>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default NavLayout;