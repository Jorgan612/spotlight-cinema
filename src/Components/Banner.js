import '../SCSS/Banner.css';
import BannerCard from './BannerCard';

const Banner = ( { video } ) => {

  const setRandomMovieBanner = video.videos.results[0].key
  return (
    <section className='banner-section'>
      <BannerCard 
        videoKey={setRandomMovieBanner}
    />
    </section>
  )
}

export default Banner;

