import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <section className='text-14-bpl-white pt-20'>
            <PageTitle title='Home' />
            <div className='w-4/5 mx-auto'>
                <h2 className='text-left font-semibold text-4xl text-14-bpl-cg-blue'>Upcoming Matches</h2>

            </div>
        </section>
    );
};

export default Home;