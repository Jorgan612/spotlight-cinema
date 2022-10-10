import '../SCSS/Banner.css';
import ReactPlayer from "react-player";
// import BannerCard from './BannerCard';

const Banner = ( { video } ) => {

  // const setRandomMovieBanner = video.videos.results[0].key
  const videoKey = video.videos.results[0].key
  return (
    // <section className='banner-section'>
      // <div className='player-wrapper'>
      <section className='banner-section'>
        <ReactPlayer 
          className='player-wrapper'
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          width='40%'
          height='100%'
        />
      </section>
        // <BannerCard 
        //   videoKey={setRandomMovieBanner}
        // />
      // </div>
    // </section>
  )
}

export default Banner;

