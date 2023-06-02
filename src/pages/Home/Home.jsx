import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Videos from "../../components/Videos/Videos";

import axios from "axios";

const api = "http://localhost:3300/videos";

function Home() {
  const [videos, setVideoData] = useState([]); //array of videos
  const [selectedVideo, setSelectedVideo] = useState({}); //single video
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (videos.length) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  function getVideo(videoId) {
    axios
      .get(`${api}/${videoId}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function getVideos() {
    axios
      .get(`${api}`)
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <>
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="wrapper">
        <div className="container">
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideoComments={selectedVideo.comments} />
        </div>
        <Videos videos={videos} selectedVideo={selectedVideo} />
      </div>
    </>
  );
}

export default Home;