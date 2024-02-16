import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from '../header/Header';

import HomePage from '../Pages/HomePage';
import SerachPage from '../Pages/SearchPage';
import FilmPage from '../Pages/FilmPage';
import SeriesPage from '../Pages/SeriesPage';
import SelectedPage from '../Pages/SelectedPage';
import ModalCard from '../ModalCard/ModalCard';


import NavBar from '../navBar/NavBar';
import Modal from '../modal/Modal';

import useEonTestServise from '../../services/eonTestServices';



import './App.scss';

function App() {
	const [data, setData] = useState(null);
	const [modalData, setModalData] = useState(null);
	const [modalActive, setModalActive] = useState(false)
	const [isSearch, setIsSearch] = useState(false);
	const [activeFilter, setFilter] = useState('main');

	const {loading, error, getFilm} = useEonTestServise();

	useEffect(() => {
		getFilm(modalActive)
			.then(data => onRequsetModal(data))
			.catch(item => console.log(item))
	}, [modalActive])
		
	const onRequsetModal = (data) => {
		setModalData(data)
	}	
	

	
	return (
		<Router>
			<div className="App">

				<Header setIsSearch={setIsSearch} setData = {setData} setFilter={setFilter}/>
				<div className="main">
					<div className="container">
						
					<Routes>
						<Route path='/' element={<HomePage isSearch={isSearch}  setModalActive = {setModalActive}/>}/>

						<Route path='/search' element={<SerachPage isSearch={isSearch} setModalActive = {setModalActive} data={data} />}/>

						<Route path='/films' element={<FilmPage />}/>

						<Route path='/series' element={<SeriesPage />}/>

						<Route path='/selected' element={<SelectedPage />}/>
					</Routes>
					
					</div>
				</div>

				<NavBar/>
				{modalActive ? <Modal active={modalActive} setActive={setModalActive} >
					<ModalCard modalData={modalData} setModalActive={setModalActive}/>
							
						
				</Modal> : <div></div>}
			</div>
		</Router>
	);
}


export default App;
