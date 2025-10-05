import React from 'react';
import { NavLink } from 'react-router';

const SideBar = () => {
    return (
        <div>
            <aside className='grid mb-4'>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/university`}>University</NavLink>
                <NavLink to={`/student`}>Students</NavLink>

            </aside>
        </div>
    );
};

export default SideBar;