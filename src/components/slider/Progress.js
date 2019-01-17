import React from "react";

const Progress = ({ min, max, progress }) => {
  console.log(max);
  console.log(progress);
  let percetageProgress = (progress / (max - min)) * 100;

  return (
    <div className="progress__holder">
      <div
        className="progress__bar"
        style={{ width: `${percetageProgress}%` }}
      />
    </div>
  );
};

export default Progress;
