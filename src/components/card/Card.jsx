
import noimg from '../../resources/img/noimg.jpg';
import star from '../../resources/icons/icon/star.svg'
import './Card.scss';
import Spiner from '../spiner/spiner'
import useEonTestServise from '../../services/eonTestServices';

const Card = ({setModalActive, dataFilm}) => {
    const {loading, error} = useEonTestServise();
    return(
        <div className="card"  
            onClick={() => {setModalActive(dataFilm.id)}}>
            {loading ? <Spiner/> : <Content  dataFilm = {dataFilm}/>}
        </div>
    )
}

const Content = ({dataFilm}) => {
    return (
        <>
            <img className="card__img" src={dataFilm.poster == "N/A" ? noimg : dataFilm.poster} alt="cars-img"/>
            <h2 className="card__title">{dataFilm.title} </h2>
            <div className="card__stars">
                <img src={star} alt="star"/>
                <span>{dataFilm.ratings ? dataFilm.ratings : null}</span>
            </div>
        </>
    )
}

export default Card;