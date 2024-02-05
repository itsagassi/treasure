"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "/videos/pickup.mov";

  return (
    <div className=" h-screen w-screen overflow-hidden">
      <ReactPlayer
        width="500px"
        height="100%"
        url={videosrc}
        controls={true}
        light={false}
        pip={true}
        config={{
          file: {
            attributes: {
              type: 'video/quicktime',
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
