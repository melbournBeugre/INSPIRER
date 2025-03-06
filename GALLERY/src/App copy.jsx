import React, { useState } from "react";
import { womanData } from "./assets/assets";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Gallery</h1>
      {/*Carte */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {womanData.map((woman, index) => {
          const { name, fonction, description, image } = woman;

          return (
            <div
              key={index}
              className="cursor-pointer p-4 text-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h1 className="text-lg text-center font-bold mt-3">{name}</h1>
              <h2 className="text-gray-600 text-center pb-4 ">{fonction}</h2>
              <button
                className="px-3 py-1.5 text-center text-white text-[15px] border border-gray-800 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-300"
                onClick={() => setIsOpen(true)}
              >
                Voir la biographie
              </button>
            </div>
          );
        })}
      </div>
      {/*Modal de détails */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden relative p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <img
                src={womanData[0].image}
                alt={womanData[0].name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="p-4">
                <h1 className="text-xl text-center font-bold">
                  {womanData[0].name}
                </h1>
                <h2 className="text-gray-600 text-center py-2">
                  {womanData[0].fonction}
                </h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{womanData[3].description}</p>
            </div>
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
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

export default App;
