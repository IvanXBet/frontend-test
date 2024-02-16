import './MainBlock.scss';
import useEonTestServise from '../../services/eonTestServices.js';
import poster from '../../resources/img/moves/avatar.svg'
import star from '../../resources/icons/icon/star.svg'

import Card from '../card/Card.jsx';

import {popularFilm} from '../../services/popularFilm.js';


const HomePage = ({setModalActive}) => {

    const {loading, error, getFilm} = useEonTestServise();
    return (
       <>
            <div className="mainBlock">
                <h1 className="mainBlock__title">Популярное</h1>
                <div className="mainBlock__block">
                    {popularFilm.map(item => {
                        return(
                            <Card dataFilm={item} setModalActive={setModalActive} key={item.id}/>
                    )})}
                </div>

                <h1 className="mainBlock__title">Просмотренное</h1>
                    <div className="mainBlock__block">
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={poster} alt="cars-img"/>
                        <div className="card__title">Аватар: Путь воды </div>
                        <div className="card__stars">
                            <img src={star} alt="star"/>
                            <span>9.0</span>
                        </div>
                    </div>

                </div>
            </div>   

            
        </>
    )
}

export default HomePage;