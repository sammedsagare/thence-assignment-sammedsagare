import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-[#1C1C1C] hover:bg-[#4E4E4E] text-[#FFFFFF] text-lg w-[223.39px] h-[77.22px] rounded-full px-[20.89px] py-[16.97px]">
      {text}
    </button>
  );
};

export default PrimaryButton;
