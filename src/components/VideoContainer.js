import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, Links } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={videos.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
