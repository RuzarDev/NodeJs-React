import React, {useState} from 'react';
import '../../styles/navBar/navbar.scss'
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
const Navbar = () => {
    return (
        <nav className='nav'>
            <LeftNav/>
            <RightNav/>
        </nav>
    );
};

export default Navbar;