import React from "react";

const FilterButtons = ({ setFilter }) => {
  return (
    <>
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-slate-300 text-indigo-700 rounded-md hover:bg-indigo-300 hover:text-white focus:outline-none"
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-4 py-2 bg-slate-300 text-indigo-700 rounded-md hover:bg-indigo-300 hover:text-white focus:outline-none"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="px-4 py-2 bg-slate-300 text-indigo-700 rounded-md hover:bg-indigo-300 hover:text-white focus:outline-none"
        >
          Incomplete
        </button>
      </div>
    </>
  );
};
export default FilterButtons;
