import React from 'react';
import Dropdown from '../Shared/Dropdown/Dropdown';
import { PlusCircleIcon } from '@heroicons/react/outline';
import useTeamData from '../../hooks/useTeamData';

const AddPlayers = () => {
    //fetching custom hooks
    const [teams] = useTeamData();

    //event handler for adding player
    const handleAddPlayer = event => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const img = event.target.imageUrl.value;
        const franchise = event.target.team.value;
        const role = event.target.role.value;

        const teamName = teams.find(team => team.name === franchise);

        console.log(teamName._id);

        const player = {
            firstName,
            lastName,
            img,
            role,
            battingAttributes: {
                matchPlayed: 0,
                totalRun: 0,
                ballFaced: 0,
                halfCenturies: 0,
                centuries: 0,
                best: 0
            },
            bowlingAttributes: {
                matchPlayed: 0,
                runConceded: 0,
                ballDelivered: 0,
                wickets: 0,
                best: '0-0'
            }
        }

        const teamId = teamName._id;
        const newPlayers = [...teamName.players, player];
        const url = `http://localhost:5000/addPlayer/${teamId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlayers)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });

        event.target.reset();
    }

    return (
        <section className='text-14-bpl-white min-h-screen pt-44'>
            <div className='w-4/5 mx-auto'>
                <h2 className='text-left font-semibold text-4xl text-14-bpl-cg-blue'>Add Player</h2>
                <div className='bg-14-bpl-royal-blue p-10 rounded-3xl mt-10'>
                    <form onSubmit={handleAddPlayer}>
                        <div className="mb-5 pt-0 text-left flex">
                            <div className='w-1/2'>
                                <label className='ml-1 font-medium text-14-bpl-cg-blue' htmlFor="firstName">Player's First Name</label>
                                <input type="text" name='firstName' placeholder="Enter First Name" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full text-14-bpl-dark-blue font-semibold" autoComplete='off' required />
                            </div>
                            <div className='w-1/2 ml-5'>
                                <label className='ml-1 font-medium text-14-bpl-cg-blue' htmlFor="lastName">Player's Last Name</label>
                                <input type="text" name='lastName' placeholder="Enter Last Name" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full text-14-bpl-dark-blue font-semibold" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="mb-5 pt-0 text-left">
                            <label className='ml-1 font-medium text-14-bpl-cg-blue' htmlFor="imageUrl">Player's Image URL</label>
                            <input type="text" name='imageUrl' placeholder="Enter Image URL" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full text-14-bpl-dark-blue font-semibold" autoComplete='off' required />
                        </div>
                        <div className="mb-8 pt-0 text-left flex">
                            <div className='w-1/2'>
                                <label className='ml-1 font-medium text-14-bpl-cg-blue' htmlFor="firstName">Player's Team</label>
                                <Dropdown dropdownName='team' dropdownDefaultValue={'Select Team'} dropdownMenu={['Patang Titans', 'Minister Mollars']} />
                            </div>
                            <div className='w-1/2 ml-5'>
                                <label className='ml-1 font-medium text-14-bpl-cg-blue' htmlFor="lastName">Player's Role</label>
                                <Dropdown dropdownName='role' dropdownDefaultValue={'Select Role'} dropdownMenu={['All Rounder', 'Batsman', 'Bowler']} />
                            </div>
                        </div>
                        <button className='bg-14-bpl-cg-blue text-14-bpl-dark-blue px-8 py-3 rounded-lg hover:opacity-40 duration-300 font-semibold' type="submit">
                            <PlusCircleIcon className='w-6 h-6 inline mr-1' /> Add Player
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddPlayers;