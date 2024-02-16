
// import Card from '../card/Card';

// import './MainBlock.scss';

// import poster from '../../resources/img/moves/avatar.svg'
// import star from '../../resources/icons/icon/star.svg'


// const MainBlock = ({categoris, setActive, data}) => {
   
   
//     return (
//         <div className="mainBlock">
//             {categoris ==='Результаты поиска' ? <ContentSearch categoris={categoris} setActive={setActive} data={data}/> : <div></div>}
//             {categoris === 'Популярные' ? <ContentPopular categoris={categoris}/> : <div></div>}
//             {categoris === 'Недавно просмотренные' ? <ContentViewed categoris={categoris}/> : <div></div>}
//         </div>
//     )
// }

// const ContentSearch = ({categoris, setActive, data}) => {
//     return (
//         <>
//             <h1 className="mainBlock__title">{categoris}</h1>
//             <div className="mainBlock__block">
//                 {data ? data.map(item => <Card setActive={setActive} dataFilm={item} key={item.id} />) : null}
//             </div>
//         </>
//     )
// }

// const ContentPopular = ({categoris}) => {
//     return (
//         <>
//             <h1 className="mainBlock__title">{categoris}</h1>
//             <div className="mainBlock__block">
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
                
//             </div>
//         </>
//     )
// }

// const ContentViewed = ({categoris}) => {
//     return (
//         <>
//             <h1 className="mainBlock__title">{categoris}</h1>
//             <div className="mainBlock__block">
//             <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="card__img" src={poster} alt="cars-img"/>
//                     <div class="card__title">Аватар: Путь воды </div>
//                     <div class="card__stars">
//                         <img src={star} alt="star"/>
//                         <span>9.0</span>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }



// export default MainBlock;