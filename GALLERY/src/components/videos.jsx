import React from "react";
import { videosData } from "../assets/assets";

const Videos = () => {
  return (
    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-7">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-10">
        Inspirez-vous de ces parcours
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videosData.map((video, index) => (
          <div key={index} className="mb-8">
            <iframe
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src={video.url + "?autoplay=0&fullscreen=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="text-lg text-gray-600 mt-3">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
