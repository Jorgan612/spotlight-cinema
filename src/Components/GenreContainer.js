import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import '../SCSS/GenreContainer.css';

//Attempt to add to watchlist is not working from the genres => sometimes it is though but the styling isn't working => weird bug (also having issue with search movies returned)

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
  })
  return (
  <>
    <div className='btn-div'>
      <Link to='/'>
        <button className='selector return-btn'>Return Home</button>
      </Link>
    </div>
    <section className='movies-container'>
      {genreList}
    </section>
  </>
  )
};
  
export default GenreContainer;