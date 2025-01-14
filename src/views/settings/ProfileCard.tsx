import React from "react";
import { FaRegCopy } from "react-icons/fa";
import UserOne from "../../assets/images/user/user-01.png";

const ProfileCard: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <img
          src={UserOne}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        {/* <button className="mt-2 text-sm text-blue-500 underline ">Edit</button> */}
        <h3 className="mt-4 text-lg font-bold dark:text-white">Jay Rutherford</h3>
        {/* <p className="text-center mt-4 text-sm text-gray-400">
          Incididunt dolore ut aliquip culpa id cupidatat mollit dolore sint
          esse non
        </p> */}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-500">
          Profile link
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="https://www.profilelink.com"
            className="w-full text-sm border border-gray-300 rounded-lg p-2"
          />
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
