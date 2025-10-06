import React, { useState } from 'react';
import image from '../../assets/images.jpeg';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';


const Nav = () => {
    const [state, setState] = useState(false);
    return (
        <nav className='flex item-center justify-between p-3 gap-6 m-3'>
            <div>
                <div className='flex gap-2'>
                    <img className='w-12' src={image} alt="" />
                    <h3>Wayne Enterprises</h3>
                </div>
                <div className='w-4 md:hidden' onClick={() => setState(!state)}>
                    {state ? <X></X> : <Menu></Menu>}
                </div>
                <div className='md:hidden'>
                    <ul className={` absolute duration-1000 ${state ? 'flex gap-6' : '-ml-100 flex gap-3'}`} >
                        <li className='text-xl text-blue-500'><NavLink> Support</NavLink></li>
                        <li className='text-xl text-blue-500'><NavLink> FAQ</NavLink></li>
                        <li className='text-xl text-blue-500'><NavLink> Find</NavLink></li>
                    </ul>
                </div>

            </div>
            <ul className='hidden md:flex gap-6 '>
                <li className='text-xl text-blue-500'><NavLink> Support</NavLink></li>
                <li className='text-xl text-blue-500'><NavLink> FAQ</NavLink></li>
                <li className='text-xl text-blue-500'><NavLink> Find</NavLink></li>
            </ul>
            <div>
                <button className='btn p-2 btn-primary'>Sign In</button>
            </div>
        </nav>
    );
};

export default Nav;