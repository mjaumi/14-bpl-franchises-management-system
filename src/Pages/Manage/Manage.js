import React from 'react';
import { UserAddIcon, ViewGridAddIcon } from '@heroicons/react/outline';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Manage = () => {
    return (
        <section className='text-14-bpl-white h-screen'>
            <PageTitle title='Manage' />
            <div className='h-full flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center border-2 border-14-bpl-cg-blue h-[350px] w-[350px] rounded-3xl cursor-pointer hover:scale-125 duration-300 hover:text-14-bpl-cg-blue'>
                    <UserAddIcon className="h-28 w-28" />
                    <h4 className='mt-8 text-2xl font-bold'>Add Players</h4>
                </div>
                <div className='flex flex-col justify-center items-center border-2 border-14-bpl-cg-blue h-[350px] w-[350px] rounded-3xl ml-20 cursor-pointer hover:scale-125 duration-300 hover:text-14-bpl-cg-blue'>
                    <ViewGridAddIcon className="h-28 w-28" />
                    <h4 className='mt-8 text-2xl font-bold'>Create Series</h4>
                </div>
            </div>
        </section>
    );
};

export default Manage;