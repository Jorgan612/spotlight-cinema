import ReactPlayer from "react-player";

const BannerCard = ( {videoKey} ) => {
  return (
    <ReactPlayer 
      url={`https://www.youtube.com/watch?v=${videoKey}`}
      width='100%'
      height='100%'
    />
  )
}

export default BannerCard;