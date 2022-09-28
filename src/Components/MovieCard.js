import '../SCSS/MovieCard.css'

const MovieCard  = ({img, id}) => {
  
  return (
    <div className='movie-card' onClick={(event) => console.log("ID", id)}>
      <img className='poster-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/>
    </div>
  )
}

export default MovieCard;