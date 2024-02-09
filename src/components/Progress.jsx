import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = ({ completed }) => {
  return (
    <ProgressBar
      completed={completed}
      animateOnRender={true}
      initCompletedOnAnimation={0}
      transitionDuration="10s"
      bgColor="#2351DC"
      borderRadius="10px"
      height="10px"
      isLabelVisible={false}
    />
  );
};

export default Progress;
