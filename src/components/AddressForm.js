import React, { useState } from "react";
import { FaLocationDot, FaBuilding, FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function AddressForm({ location, setAddressSave }) {
  const [formData, setFormData] = useState({
    blockNo: "",
    area: "",
    category: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressSave(false);
    console.log("Address Saved:", formData);
    alert("Address saved successfully!");
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col border-2 border-gray-200 rounded-lg p-4">
      {/* Location Display */}
      <div className="flex gap-4 items-start justify-start mb-7">
        <FaLocationDot className="text-3xl md:text-5xl lg:text-5xl text-red-600" />
        <p className="text-3xl md:text-5xl lg:text-5xl">Vibhav Nagar</p>
      </div>
      <div className="text-xl mb-4">
        <span className="font-semibold">latitude:</span> {location?.lat}{" "}
        <span className="font-semibold">longitude:</span> {location?.lng}
      </div>

      {/* Address Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Block/Flat Number */}
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="blockNo">
            House/Flat/Block No.
          </label>
          <input
            type="text"
            id="blockNo"
            name="blockNo"
            value={formData.blockNo}
            onChange={handleInputChange}
            placeholder="Enter block number"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Apartment/Road/Area */}
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="area">
            Apartment/Road/Area
          </label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            placeholder="Enter area details"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Save Address Under
          </label>
          <div className="flex gap-4">
            <div
              className={`flex flex-col items-center cursor-pointer border-2 rounded-lg p-2 hover:text-black ${
                formData.category === "Home" ? "text-blue-600" : "text-gray-400"
              }`}
              onClick={() => handleCategorySelect("Home")}
            >
              <FaHome className="text-4xl" />
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer border-2 rounded-lg p-2 hover:text-black ${
                formData.category === "Office"
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
              onClick={() => handleCategorySelect("Office")}
            >
              <FaBuilding className="text-4xl" />
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer border-2 rounded-lg p-2 hover:text-black ${
                formData.category === "Friends & Family"
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
              onClick={() => handleCategorySelect("Friends & Family")}
            >
              <FaUsers className="text-4xl" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Save Address
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
