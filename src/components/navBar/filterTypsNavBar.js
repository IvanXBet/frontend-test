import Home from '../../svgNavBar/Home.jsx';
import Movies from '../../svgNavBar/Movies.jsx';
import Serials from '../../svgNavBar/Serials.jsx';
import Search from '../../svgNavBar/Search.jsx';
import Selected from '../../svgNavBar/Selected.jsx';



export const filterTypsNavBar = [
		{ text: 'Главная', type: 'main', to: '/', icon: Home},
		{ text: 'Фильмы', type: 'movie', to: '/films', icon: Movies},
		{ text: 'Сериалы', type: 'series', to: '/series', icon: Serials},
		{text: 'Поиск', type: 'search', to:'/search', icon: Search},
		{text: 'Избранное', type: 'selected', to:'/selected', icon: Selected}
	];