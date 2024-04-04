import React from 'react';
import {Link} from "react-router-dom";
import Toggle from "./Toggle";

const RightNav = () => {
    return (
        <div className="rightside">
            <ul className="nav__list">
                <li className="list__item">
                    <Link to={'/'}><p className="list__link">Blog</p></Link>
                </li>
                <li className="list__item">
                    <a href="#"><p className='list__link'>Projects</p></a>
                </li>
                <li className="list__item">
                    <a href="#"><p className='list__link'>About</p></a>
                </li>
                <li className="list__item">
                    <a href="#"><p className='list__link'>Newsletter</p></a>
                </li>
                <li className="list__item">
                    <Toggle/>

                </li>
            </ul>
        </div>
    );
};

export default RightNav;