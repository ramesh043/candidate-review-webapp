import React from "react";

function ProgressBar({ title, score }) {
  return (
    <div className="flex justify-between py-2 m-2">
      <div>
        <h6 className="text-gray-400 font-bold text-sm">{title}</h6>
      </div>

      <div>
        <p className="text-green-400 font-bold">{score}</p>
      </div>
    </div>
  );
}

export default ProgressBar;
