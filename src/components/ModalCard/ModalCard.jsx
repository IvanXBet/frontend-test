import modalSelected from '../../resources/icons/modal/selected.svg';
import modalShare from '../../resources/icons/modal/share.svg';
import modalEllipse from '../../resources/icons/modal/Ellipse.svg'
import modalIconPlay from '../../resources/icons/modal/play-icon.svg'


const ModalCard = ({modalData, setModalActive}) => {
    return(
		<>
			<div className="modal__close" onClick={() =>setModalActive(false)} ></div>
			<div className="modal__img">
				<img src={modalData.poster} alt="modal-img"/>
			</div>
			<div className="modal__block">
				<div className="modal__title">{modalData.title}</div>
				<div className="modal__btns">
					<button className="modal__btn"><img src={modalIconPlay} alt=""/> <span>Смотреть</span></button>
					<div className="modal__selected">
						<img src={modalSelected} alt="selected"/>
					</div>
					<div className="modal__share">
						<img src={modalShare} alt="share"/>
					</div>
				</div>
				<div className="modal__statistic">
					<div className="modal__stars"> {modalData.ratings}</div>
						<div className="modal__separator"></div>
						<div className="modal__year">{modalData.year}</div>
					
				</div>
				<div className="modal__restriction">16+</div>
				<div className="modal__categories">
					<span>Приключения</span>
					<img src={modalEllipse} alt=""/>    
					<span>Фэнтези</span>
					<img src={modalEllipse} alt=""/>
					<span>Семейный</span>
				</div>
				<p className="modal__text">{modalData.plot}</p>
			</div>
		</>
    )
}

export default ModalCard;