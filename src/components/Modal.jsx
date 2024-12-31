import React from "react";

const Modal = ({ onEnableLocation, onSearchManually }) => (
  <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center border-2 border-gray-200 rounded-xl">
    <h3 className="font-bold text-center text-3xl mb-4 p-2">
      Location Permission is off
    </h3>
    <p className="text-xl mb-4 p-2">
      We need your location to find the nearest store & provide you a seamless
      delivery experience. Enable the location or select your location manually.
    </p>
    <div className="flex gap-4 mb-4">
      <button
        onClick={onEnableLocation}
        className="text-white bg-red-600 border-2 border-red-600 p-2 md:p-4 lg:p-4 text-lg md:text-xl mg:text-xl rounded-xl"
      >
        Enable Location
      </button>
      <button
        onClick={onSearchManually}
        className="text-red-600 bg-white border-2 border-red-600 p-2 md:p-4 lg:p-4 text-lg md:text-xl mg:text-xl rounded-xl"
      >
        Search Manually
      </button>
    </div>
  </div>
);

export default Modal;
