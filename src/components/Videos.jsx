import React, { useRef } from "react";

const Videos = () => {
  const videoRefs = Array.from({ length: 4 }, () => useRef(null));

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
      {videoRefs.map((videoRef, index) => (
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
            <source
              src={`../../src/assets/videos/video${index + 1}.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Videos;
