import React from 'react';

const Home = () => {
    return (
        <section id="home" className=" bg-zinc-900 flex flex-col justify-center items-center min-h-64  ">
            <div class="text-center">
                <h2 className='text-white text-5xl m-3 py-3'>Hi, I'm Kyle Geary</h2>
                <h4 className='text-white text-2xl m-3 py-3'> Full-Stack Developer</h4>
                <button className='bg-zinc-800 hover:bg-stone-950 text-white font-bold py-2 px-4 rounded m-10'>Contact Me</button>
                
            </div>
        </section>
    );
};

export default Home;