import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";
import CarouselDots from "../components/CarouselDots";
import Brunel from "../assets/brunel.png";
import woman from "../assets/woman1.png";

export default function Hero() {
  return (
    <div className="h-screen">
      <nav className="flex justify-between border border-[#EAEAEA] rounded-[65.28px] mx-6 mt-6 px-[20.89px] py-[16.97px]">
        <div className="my-auto ml-[6.78px]-">
          <img src={Brunel} alt="Brunel" />
        </div>
        <div className="flex">
          <SecondaryButton text="Get Projects" />
          <PrimaryButton text="Onboard Talent" />
        </div>
      </nav>
      <div className="flex flex-col mx-auto text-center mt-20">
        <div>
          <h1 className="font-grace text-4xl text-[#2DA950]">
            Success Stories
          </h1>
        </div>
        <div>
          <h1 className="font-manrope font-semibold text-[56px] leading-[67.2px]">
            Every success journey
            <br />
            we've encountered.
          </h1>
        </div>
      </div>
      <div className="flex justify-between mx-16 mt-[289px]">
        <div className="w-[519.65px] h-[693.29px]">
          <img src={woman} alt="Brunel" className="rounded-3xl" />
        </div>
        <div className="flex flex-col">
          <div className="w-[398px] h-[192px] mr-36">
            <h1 className="font-manrope font-semibold text-[40px] leading-[48px]">
              Enhance fortune 50 company's insights teams research capabilities
            </h1>
          </div>
          <div className="my-20">
            <CarouselDots />
          </div>
          <div>
            <PrimaryButton text="Explore More &rarr;" />
          </div>
        </div>
      </div>
    </div>
  );
}
