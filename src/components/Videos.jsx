import React, { useRef } from "react";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";

const Videos = () => {
  const videoRefs = Array.from({ length: 4 }, () => useRef(null));

  const videos = [video1, video2, video3, video4];

  const handleMouseEnter = (index) => () => {
    videoRefs[index].current.play();
  };

  const handleMouseLeave = (index) => () => {
    videoRefs[index].current.pause();
  };

  const handleVideoEnded = (index) => () => {
    videoRefs[index].current.currentTime = 0;
    videoRefs[index].current.play();
  };

  const getVideoAspectClass = (index) => {
    const video = videoRefs[index].current;
    if (!video) return ""; // No video loaded yet

    const aspectRatio = video.videoWidth / video.videoHeight;
    return aspectRatio > 1 ? "horizontal-video" : "vertical-video";
  };

  return (
    <div className="grid lg:grid-cols-2 gap-x-8 gap-4">
      {videos.map((video, index) => (
        <div
          className={`video-container ${getVideoAspectClass(index)}`}
          key={index}
        >
          <video
            // ref={videoRef}
            width="100%"
            // muted
            className="video"
            controls={true}
            // onMouseEnter={handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave(index)}
            // onEnded={handleVideoEnded(index)}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Videos;
