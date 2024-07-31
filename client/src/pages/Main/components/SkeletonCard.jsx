import React, { memo } from "react";

const SkeletonCard = () => {
  return (
    <div className="cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 animate-pulse">
      <div className="bg-white dark:bg-section-bg shadow-md rounded-lg overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(SkeletonCard);
