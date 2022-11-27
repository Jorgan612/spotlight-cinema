// import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';

//Attempt to add to watchlist is not working from the genres 

const GenreContainer = ({ getSingleMovieDetails, addToWatchList, removeFromWatchList,specificGenre, isOnWatchList }) => {
  const genreList = specificGenre.map((movie, index) => {
    return <GenreCard
      img={movie.poster_path}
      key={index}
      id={movie.id}
      getSingleMovieDetails={getSingleMovieDetails}
      addToWatchList={addToWatchList}
      isOnWatchList={isOnWatchList}
      removeFromWatchList={removeFromWatchList}
    /> 
  });
  return (
    <section className='movies-container'>
      {genreList}
    </section>
  )
};
  
export default GenreContainer;