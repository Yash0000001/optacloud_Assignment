import React from "react";

const SaveModal = ({ setShowMap, setShowModal, setSave }) => {
  const handleBack = () => {
    setShowMap(false);
    setShowModal(true);
  };
  const handleSave = () => {
    setShowMap(false);
    setSave(true);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center border-2 border-gray-200 p-4 rounded-xl">
      <h3 className="font-bold text-center text-3xl mb-4">
        Save your Delivery Location
      </h3>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleSave}
          className="text-white bg-red-600 border-2 border-red-600 p-2 md:p-4 lg:p-4 text-lg md:text-xl mg:text-xl rounded-xl"
        >
          Save Location
        </button>
        <button
          onClick={handleBack}
          className="text-red-600 bg-white border-2 border-red-600 p-2 md:p-4 lg:p-4 text-lg md:text-xl mg:text-xl rounded-xl"
        >
          Back to Enable Location
        </button>
      </div>
    </div>
  );
};

export default SaveModal;
