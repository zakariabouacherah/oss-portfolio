import React, { useRef } from "react";

const Videos = () => {
  //   const videoRef = useRef(null);
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

  const divStyle =
    "h-[200px] lg:h-[350px] overflow-hidden flex items-center justify-center  shadow-lg ";
  const videoStyle =
    "w-full h-full object-cover drop-shadow-md cursor-pointer lg:brightness-50 hover:brightness-100 transition-all ease";

  return (
    <div className="grid lg:grid-cols-2 gap-x-8 gap-4">
      {videoRefs.map((videoRef, index) => (
        <div className={`${divStyle}`} key={index}>
          <video
            ref={videoRef}
            width={400}
            muted
            // onMouseEnter={handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave(index)}
            // onEnded={handleVideoEnded(index)}
            className={videoStyle}
            controls
          >
            <source
              src={`../../public/videos/v${index + 1}.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

      {/* <div className={`${divStyle} `}>
        <video
          ref={videoRef}
          width={400}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onEnded={handleVideoEnded}
          className={videoStyle}
        >
          <source
            src="https://player.vimeo.com/external/357096778.sd.mp4?s=a8f6c42695235072636e5bd607cbd7b2e919b9a7&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default Videos;
