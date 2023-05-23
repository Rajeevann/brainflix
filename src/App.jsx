import { useState } from "react";

import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Videos from "./components/Videos/Videos.js";

import videoData from "./assets/Data/video-details.json";
import videosList from "./assets/Data/videos.json";
import "./App.scss";

function App() {
  // useState for Array of Videos
  const [videos, setVideoData] = useState(videosList);

  // useState for Single Video
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  // Function to handle video click event
  const handleVideoClick = (id) => {
    // Find the clicked video from the array of videos
    const newVideo = videoData.find((video) => video.id === id);
    // Update the selectedVideo state with the new video
    setSelectedVideo(newVideo);
  };

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="wrapper">
        <div className="container">
          {/* Section for single video selection */}
          <Hero selectedVideo={selectedVideo} />
          {/* Section for displaying comments related to the selected video */}
          <Comments selectedVideoComments={selectedVideo.comments} />
        </div>
        {/* Component for displaying a list of videos */}
        <Videos
          videos={videos}
          selectedVideo={selectedVideo}
          handleVideoClick={handleVideoClick}
        />
      </div>
    </>
  );
}

export default App;
