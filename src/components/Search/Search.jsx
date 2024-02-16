import { useState } from 'react';

import SearchSvg from './svgSearch/SearchSvg';
import CloseSvg from './svgSearch/CloseSvg';

const Search = ({inputText, focus, setFocus, handleInputChange, hoverClose, setHoverClose, claerInput}) => {




    return(
        <div className="header__wrapper">
            <input 
                value={inputText} 
                required 
                onFocus={() => setFocus(true)}  
                onChange={(e) => {handleInputChange(e)}} 
                autocomplete="off"
                className="header__search" 
                name='search' 
                type="search"/>

            <div className="header__icon-search"  style={focus ? {display: 'block'} : {display: 'none'} }>
                <SearchSvg />
            </div>
            

            <div className="header__placeholder" style={focus ? {display: 'none'} : {display: 'flex'} }>
                <SearchSvg className="header__placeholder-icon" />
                <div className="header__placeholder-text" >Поиск по сайту</div>
            </div>

            <span className="header__clearBtn" onClick={claerInput} onMouseEnter={() => setHoverClose(true)} onMouseLeave={() => setHoverClose(false)}>

                <CloseSvg color={hoverClose ? '#E6E6E6' : '#737373'} />

            </span>
            
        </div>
    )
}

export default Search;