import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-14-bpl-royal-blue py-5 text-14-bpl-white fixed w-full'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-14-bpl-cg-blue'>14-<span className='font-extrabold text-3xl'>BPL</span> </h1>
                </div>
                <div>
                    <nav className='flex items-center'>
                        <Link to='/' className='text-lg font-medium hover:opacity-40 duration-300'>Home</Link>
                        <Link to='/teams' className='ml-10 text-lg font-medium hover:opacity-40 duration-300'>Teams</Link>
                        <Link to='/liveMatch' className='ml-10 text-lg font-medium hover:opacity-40 duration-300'>Live Match</Link>
                        <Link to='/summary' className='ml-10 text-lg font-medium hover:opacity-40 duration-300'>summary</Link>
                        <Link to='/manage' className='ml-10 text-lg font-medium hover:opacity-40 duration-300'>Manage</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;