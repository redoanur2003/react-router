import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Nav></Nav>
            <div className='flex gap-10'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;