import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Nav></Nav>
            <div className='flex gap-10'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;