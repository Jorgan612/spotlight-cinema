import '../CSS/Banner.css';
import ReactPlayer from "react-player";

const Banner = ( { video } ) => {
  return (
      <section className='banner-section'>
        <ReactPlayer 
          className='player-wrapper'
          url={`https://www.youtube.com/watch?v=${video?.videos?.results[0]?.key}`}
          width='40%'
          height='100%'
        />
      </section>
  )
};

export default Banner;

