import React from "react";

const SkeletonCard = () => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-between gap-4 items-center cursor-pointer animate-pulse">
      <div className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48 border-2 border-gray-300 rounded-xl bg-gray-200">
        <div className="w-full h-full bg-gray-300 rounded-xl"></div>
      </div>
      <div className="flex flex-col gap-4 w-full sm:w-2/3">
        <div className="flex gap-2 items-center">
          <div className="w-1/3 h-6 bg-gray-300 rounded-md"></div>
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
