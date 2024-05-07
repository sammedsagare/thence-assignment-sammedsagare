import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";
import CarouselDots from "../components/CarouselDots";
import Brunel from "../assets/brunel.png";
import woman from "../assets/woman1.png";
import rocket from "../assets/rocket.png";
import sparkle from "../assets/sparkle.png";
import vector from "../assets/vector.png";
import plus from "../assets/+.png";
import minus from "../assets/-.png";
import c from "../assets/c.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="h-screen">
      <nav className="flex justify-between border border-[#EAEAEA] rounded-[65.28px] mx-6 mt-6 px-[20.89px] py-[16.97px]">
        <div className="my-auto ml-[6.78px]-">
          <img src={Brunel} alt="Brunel" />
        </div>
        <div className="flex">
          <Link to="/projects">
            <SecondaryButton text="Get Projects" />
          </Link>
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
      <div className="flex justify-between mr-16 ml-32 mt-[289px]">
        <div className="relative w-[519.65px] h-[693.29px]">
          <img src={woman} alt="Woman" className="rounded-3xl" />
          <div className="absolute bottom-[360px] -left-24 shadow-md bg-white w-64 h-60 rounded-[27.11px] p-[30px] hover:scale-110 transition-all">
            <div className="flex flex-col">
              <img
                src={sparkle}
                alt=""
                className="w-[79.17px] h-[78.48px] -mt-7 -ml-7"
              />
              <h1 className="font-manrope text-[64px] text-[#1c1c1c] font-medium w-[121px] h-[77px] -mt-12">
                40%
              </h1>
              <h1 className="font-manrope font-medium text-lg text-[#828282] w-[207.82px] h-[92px] mt-2">
                Achieved reduction in project execution time by optimising team
                availability
              </h1>
            </div>
          </div>
          <div className="absolute flex justify-between bottom-56 -left-12 py-4 pr-8 pl-4 shadow-md bg-white w-60 h-20 rounded-[111.54px] hover:scale-110 transition-all">
            <div className="flex m-auto">
              <img src={rocket} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-manrope text-2xl text-black font-bold">
                10 DAYS
              </h1>
              <h1 className="font-manrope text-base text-[#828282] font-medium">
                Staff Deployment
              </h1>
            </div>
          </div>
          <div className="absolute flex flex-col justify-center items-center bottom-20 -right-20 pt-[34px] pr-[30px] pb-[40px] pl-[36px] shadow-md bg-[#002E18] w-72 h-60 rounded-[28.36px] hover:scale-110 transition-all">
            <h1 className="mb-5">
              <span className="font-manrope text-white text-6xl">$0.5</span>{" "}
              <span className="font-manrope text-[#A6A3A0] text-2xl">
                MILLION
              </span>
            </h1>
            <h1 className="font-manrope text-[#CCCCCC] text-lg ml-2 w-[224.5px] h-[69px]">
              Reduced client expenses by saving on hiring and employee costs.
            </h1>
          </div>
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
      <div className="relative bg-[#E8EEE7] w-[1376px] h-[749px] rounded-[40px] mx-auto flex justify-between">
        <div className="flex flex-col mt-20 ml-24 space-y-5">
          <h1 className="font-grace text-[32px] leading-9 text-[#9E9D9D]">
            What's on your mind
          </h1>
          <h1 className="font-manrope font-semibold text-[#1c1c1c] text-6xl">
            Ask Questions
          </h1>
        </div>
        <img src={vector} alt="" className="absolute -bottom-7 left-1" />
        <div className="flex flex-col mt-20 mr-24 space-y-9 w-[581px] h-[538px]">
          <div className="flex justify-between border-b border-[#D7D7D7] pb-6">
            <h1 className="font-manrope text-xl text-[#1c1c1c] font-semibold">
              Do you offer freelancers?
            </h1>
            <img src={plus} alt="" className="w-[14px] h-[14px]" />
          </div>
          <div className="flex justify-between border-b border-[#D7D7D7] pb-6">
            <h1 className="font-manrope text-xl text-[#1c1c1c] font-semibold w-[411px] h-14">
              What's the guarantee that I will be satisfied with the hired
              talent?
            </h1>
            <img src={plus} alt="" className="w-[14px] h-[14px]" />
          </div>
          <div className="flex flex-col border-b border-[#D7D7D7] pb-6">
            <div className="flex justify-between">
              <h1 className="font-manrope text-xl text-[#1c1c1c] font-semibold w-[411px] h-14">
                Can I hire multiple talents at once?
              </h1>
              <img src={minus} alt="" className="w-6 h-6" />
            </div>
            <h1 className="font-manrope text-[15px] text-[#617275]">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </h1>
          </div>
          <div className="flex justify-between border-b border-[#D7D7D7] pb-6">
            <h1 className="font-manrope text-xl text-[#1c1c1c] font-semibold w-[411px] h-14">
              Why should I not go to an agency directly?
            </h1>
            <img src={plus} alt="" className="w-[14px] h-[14px]" />
          </div>
          <div className="flex justify-between border-b border-[#D7D7D7] pb-6">
            <h1 className="font-manrope text-xl text-[#1c1c1c] font-semibold w-[411px] h-14">
              Who can help me pick a right skillset and duration for me?
            </h1>
            <img src={plus} alt="" className="w-[14px] h-[14px]" />
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div className="flex justify-between w-[1376px] h-[144px] rounded-[40px] mx-auto mt-[135px] p-[60px] bg-[#f5f5f5]">
          <div className="flex gap-5 my-auto">
            <img src={c} alt="" className="w-6 h-6" />
            <h1 className="font-manrope font-medium text-lg text-[#1c1c1c]">
              Talup 2023. All rights reserved
            </h1>
          </div>
          <div className="flex gap-5 my-auto">
            <h1 className="font-manrope text-lg text-[#1c1c1c]">
              Terms & Conditions
            </h1>
            <h1 className="font-manrope text-lg text-[#1c1c1c]">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
