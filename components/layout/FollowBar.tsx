import React from "react";

const FollowBar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 p-4 rounded-xl">
        <h2 className="text-white text-xl font-semibold">Qui suivre ?</h2>
        <div className="flex flex-col gap-6 mt-4">{/* TODO: user List */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
