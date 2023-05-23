import "./Hero.scss";

function Hero(props) {
  return (
    <section className="hero">
      {/* Title of the selected video */}
      <h1 className="hero__title">{props.selectedVideo.title}</h1>
      <div className="hero__container">
        {/* Channel name */}
        <p className="hero__name">By {props.selectedVideo.channel}</p>
        {/* Number of views */}
        <p className="hero__views">{props.selectedVideo.views}</p>
        {/* Timestamp of the video */}
        <p className="hero__date">
          {new Date(props.selectedVideo.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
        {/* Number of likes */}
        <p className="hero__likes">{props.selectedVideo.likes}</p>
      </div>
      {/* Description of the selected video */}
      <p className="hero__description">{props.selectedVideo.description}</p>
    </section>
  );
}

export default Hero;
