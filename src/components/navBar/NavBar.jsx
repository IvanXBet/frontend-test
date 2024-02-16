import {NavLink, useLocation} from 'react-router-dom';
import {filterTypsNavBar} from './filterTypsNavBar'

import './NavBar.scss'
import { useEffect } from 'react';

const NavBar = () => {

    const currentRoute = useLocation();
    
    return (
        <div className="navbar">
            <div className="navbar__items">
                {filterTypsNavBar.map((item, i) => {
                   
                    return (
                                <NavLink
                                        className='navbar__item'
                                        to={item.to} 
                                        key={i}
                                        style={({isActive})=> ({color: isActive ? '#FFFFFF' : '#737373'})} >
                                    <div className="navbar__img">
                                        <item.icon color={currentRoute.pathname === item.to ?'#E6E6E6' : '#737373'}/> 
                                    </div>
                                    <div className="navbar__text">{item.text}</div>
                                </NavLink>
                            )
                })}  
            </div>
        </div>
    )
}

export default NavBar;

