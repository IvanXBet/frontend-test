import { useState } from 'react';
import {Link, useNavigate, NavLink, useLocation} from 'react-router-dom';
import { useResize } from '../../hooks/resize.hook';

import Search from '../Search/Search';



import './Header.scss';


import logo from '../../resources/icons/Logo.svg';
import selected from '../../resources/icons/icon/selected.svg'
import profil from '../../resources/img/Img.svg'
import arrow from '../../resources/icons/icon/bottom-arrow.svg'

import useEonTestServise from '../../services/eonTestServices';

import { filterTyps } from './filterTyps';


const Header = ({setData, setFilter}) => {
    const [inputText, setInputText] = useState('')
    const [focus, setFocus] = useState(false);
    const [hoverClose, setHoverClose] =useState(false);

	const {getFilms} = useEonTestServise();

    const { Tablet, Desktop } = useResize();
    
    const navigate = useNavigate();
	const onSerch = (serchName) => {
        getFilms(serchName).then(data => onRequset(data))
        .catch(data => setData(false))
    }
    

    const onRequset = (data) => {
        setData(data)
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        
        onChangeInput(e.target.value)
    }
    
    const onChangeInput = (text) => {
        if(text === null) {
            claerInput()
            return
        }

        navigate("/search");
        onSerch(text.trim())
    }

    const onSwitchType = (type) => {
        setFilter(type)
    }

    const claerInput = () => {
        setFocus(false)
        setInputText('')
        navigate("/");
        onSerch(null)
    }

    const currentRoute = useLocation();
    
    return (
            <header className={currentRoute.pathname === '/search' && (!Desktop && !Tablet) ? "header activeSearch" : "header"}>
            <div className="container">
                <div className="header__content">
                    <div className="header__left-content">
                        <div className="header__humgurger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/">
                            <img src={logo} alt="logo" className="headre__logo"/>
                        </Link>
                            
                        
                    </div>
                    <div className="header__links">
                        {filterTyps.map((item, i) => {
                           if(item.type !== 'search') {
                                return (
                                    <NavLink 
                                        onClick={() => onSwitchType(item.type)}
                                        style={({isActive})=> ({color: isActive ? '#FFFFFF' : '#737373'})} 
                                        to={item.to}
                                        key={i}
                                        data-type={item.type} 
                                        className="header__link" >{item.text}</NavLink>
                                )
                           }
                        })}

                    
                    </div>
                    <div className="header__right-content">
                        <Search 
                            inputText={inputText} 
                            setFocus={setFocus} 
                            handleInputChange={handleInputChange}
                            focus={focus}
                            hoverClose={hoverClose}
                            setHoverClose={setHoverClose}
                            claerInput={claerInput}/>

                        <Link to='/selected'>
                            <img src={selected} alt="selected" className="header__selected"/>
                        </Link>

                        <div className="header__profil">
                            <div className="header__profil-img">
                                <img src={profil} alt="profil"/>
                            </div>
                            <div className="header__profil-arrow">
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}


export default Header;