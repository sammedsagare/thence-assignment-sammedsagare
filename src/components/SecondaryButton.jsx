import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="bg-white hover:bg-[#F1F1F1] border border-[#EAEAEA] text-[#1C1C1C] text-lg w-[189.56px] h-[77.22] rounded-full py-[26.11px] px-[41.78px]">
      {text}
    </button>
  );
};

export default SecondaryButton;
