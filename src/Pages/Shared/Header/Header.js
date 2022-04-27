import React from 'react';

const Header = () => {
    return (
        <header className='bg-14-bpl-royal-blue py-5 text-14-bpl-white'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-14-bpl-cg-blue'>14-<span className='font-extrabold text-3xl'>BPL</span> </h1>
                </div>
                <div>
                    <nav className='flex items-center'>
                        <p>Home</p>
                        <p className='ml-5'>Teams</p>
                        <p className='ml-5'>Add Players</p>
                        <p className='ml-5'></p>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;