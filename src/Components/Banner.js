import { useEffect } from 'react';
import '../SCSS/Banner.css';
import MovieCard from './MovieCard';

const Banner = ({movies}) => {
  
  
  // left off looking at Suzie's example 



  // return (

  // )

  let random = Math.floor(Math.random() * movies.length)
console.log('randomMovie', random)
console.log('Movies array', movies[random])
  // console.log('______', movies)
  // const randomMovie = () => {
  //   let rando =  Math.floor(Math.random() * movies.length)
  //   console.log('rando', rando)
  //   return rando;
  // }

  render() {
    const filteredQuoteCards = this.state.filteredQuotes.map((quote, index) => {
      return (
        <Card
          text={quote.text}
          author={quote.author}
          id={index}
          key={index}
       />
    )
  });

  return (
    <section className='banner-section'>
      <MovieCard />
      <p>TEST</p>
      <p>{random}</p>
      <p>{random.title}</p>
      {/* <MovieCard rando={randomMovie}/>  */}
    </section>
  )
}

export default Banner;

