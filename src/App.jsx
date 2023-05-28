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
  return (
    <>
      <BrowserRouter>
        {/* <Header DarkMode={DarkMode} setDarkMode={setDarkMode} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="videos/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );

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
