import { useHttp } from "../hooks/http.hook";


const  useEonTestServise = () => {
    const {loading, request, error} = useHttp();
    const _apiBase ='http://www.omdbapi.com/?';
    const _apiKey = 'apikey=72305922';
    

    const getFilms = async (filmName) => {
        const data = await request(`http://www.omdbapi.com/?&apikey=72305922&s=${filmName}&type="movie"`);
        console.log(data)
        return data.Search.map(item => _transform(item)); 
    }

    const getFilm = async (filmId) => {
        const data = await request(`http://www.omdbapi.com/?&apikey=72305922&i=${filmId}&type="movie"`);
        return _transforFilm(data); 
    }

    const _transform = (data) => {
        
        return {
            title: data.Title,
            year: data.Year,
            poster: data.Poster,
            id: data.imdbID
        }
    }

    const _transforFilm =  (data) => {
        return {
            title: data.Title,
            year: data.Year,
            poster: data.Poster,
            plot: data.Plot,
            id: data.imdbID,
            ratings: data.imdbRating,
            genre: data.Genre,
        }
    }
   
    return {getFilms, getFilm, loading, error}
}

export default useEonTestServise;
