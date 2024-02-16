

import Card from '../card/Card';

import './MainBlock.scss';

const SerachPage = ({setModalActive, data}) => {

    
    return (
            <div className="mainBlock">
            <h1 className="mainBlock__title">Результаты поиска</h1>
            <div className="mainBlock__block">
                {data ? data.sort((a, b) => b.year - a.year)
                            .map(item => 
                                    {
                                        return (
                                            <Card 
                                            setModalActive={setModalActive} 
                                            dataFilm={item} 
                                            key={item.id}/>
                                        )
                                    }) : 
                <dvi style={{fontSize: '16px',
                            fontWeight: '500',
                            linHeight: '140%',
                            color: '#E6E6E6'}}>Не найдено</dvi>}
            </div>
            </div>
    )
}

export default SerachPage
