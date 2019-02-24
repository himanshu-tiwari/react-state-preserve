import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    const { open, toggleOpen } = props;

    console.log(open);
    return(
        <div className={`sidebar-container ${open && 'open'}`}>
            <p className="hamburger" onClick={(e) => {
                e.stopPropagation();
                toggleOpen();
            }}>
                <span></span>
                <span></span>
                <span></span>
            </p>

            <div className="sidebar-content">
                <NavLink to='/'>Correct One</NavLink>
                <NavLink to='/incorrect'>Incorrect One</NavLink>
                <NavLink to='/bubbling'>Bubbling</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;