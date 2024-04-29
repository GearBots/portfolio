import React from 'react';

const Home = () => {
    return (
        <section id="home" className=" bg-sky-600 flex flex-col justify-center items-center min-h-64">
            <div class="text-center">
                <h2 className='text-5xl'>Hi, I'm Kyle Geary</h2>
                <h4 className='text-2xl'> Full-Stack Developer</h4>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact Me</button>
                
            </div>
        </section>
    );
};

export default Home;