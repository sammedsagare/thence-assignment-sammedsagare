import React, { useEffect } from "react";
import Brunel from "../assets/brunel.png";
import check from "../assets/check.png";

export default function Success() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <nav className="absolute top-6 left-6">
        <img src={Brunel} alt="Brunel" />
      </nav>
      <div className="flex flex-col justify-center items-center">
        <img src={check} alt="" className="w-20 h-20 text-center" />
        <h1 className="font-grace text-4xl text-tGreen">Success Submitted</h1>
        <h1 className="font-manrope text-[56px] text-[#1C1C1C] font-semibold">
          Congratulations
        </h1>
        <h1 className="text-[#727272] text-[27px] font-manrope w-[718px] h-[105px] text-center">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </h1>
      </div>
      <div className="absolute bottom-6 text-center w-full">
        <h1>
          <span className="text-[#727272] text-xl font-manrope">
            Redirecting you to Homepage in{" "}
          </span>
          <span className="text-xl font-manrope font-bold text-[#1c1c1c]">
            5 seconds
          </span>
        </h1>
      </div>
    </div>
  );
}
