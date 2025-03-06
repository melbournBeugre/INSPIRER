import React, { useState } from "react";
import { womanData } from "../assets/assets";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWoman, setSelectedWoman] = useState(null);

  const openModal = (woman) => {
    setSelectedWoman(woman);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-10 py-7">
        Gallerie des talents inspirants
      </h1>

      {/* Cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womanData.map((woman, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer p-4 text-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={woman.image}
                alt={woman.name}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />
              <h1 className="text-lg text-center font-bold mt-3">
                {woman.name}
              </h1>
              <h2 className="text-gray-600 text-center pb-4">
                {woman.fonction}
              </h2>
              <button
                className="px-3 py-1.5 text-center text-white text-[15px] border border-gray-800 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-300"
                onClick={() => openModal(woman)}
              >
                Voir la biographie
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal de détails */}
      {isOpen && selectedWoman && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 backdrop-blur-md z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 w-full max-w-4xl rounded-lg shadow-lg overflow-hidden relative p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex items-center justify-center">
              <img
                src={selectedWoman.image}
                alt={selectedWoman.name}
                className="w-full  h-56 sm:h-64 md:h-80 object-center rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center p-4">
              <h1 className="text-xl font-bold text-center">
                {selectedWoman.name}
              </h1>
              <h2 className="text-gray-600 text-center py-2">
                {selectedWoman.fonction}
              </h2>
              <p className="text-gray-700 text-justify overflow-y-auto h-48 sm:h-60 md:h-72 p-3">
                {selectedWoman.description}
              </p>
            </div>
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-1 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
