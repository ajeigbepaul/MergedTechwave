import React from "react";
import Button from "./Button";

const BannerInfo = ({
  description1,
  emphasytext,
  descri2,
  position,
  description1b,
}: {
  description1?: string;
  emphasytext?: string;
  descri2?: string;
  position?: number;
  description1b?: string;
}) => {
  return (
    <div className="w-full max-w-xl px-4 py-8 md:px-8 md:py-14 h-auto flex flex-col space-y-6 md:space-y-8">
      {position === 1 && (
        <div className="flex flex-col items-start justify-center mt-4 space-y-4 md:space-y-6 w-full">
          <h1 className="text-left font-extrabold text-white font-grotesque text-[32px] md:text-[30px] lg:text-[50px] ">
            {description1}
          </h1>
          <span className="text-white bg-brandcolor font-bold p-2 w-fit font-grotesque text-[32px] md:text-[30px] lg:text-[50px] ">
            {emphasytext}
          </span>
          <p className="text-whitetext  text-left font-grotesque text-base md:text-sm lg:text-[17px] w-full">
            {descri2}
          </p>
        </div>
      )}
      {position === 2 && (
        <div className="flex flex-col space-y-4 md:space-y-6 mt-4 w-full">
          <div className="flex items-center space-x-2">
            <span className="text-white bg-gold font-bold p-2 w-fit font-grotesque text-[24px] md:text-[30px] lg:text-[50px]">
              {emphasytext}
            </span>
            <h1 className="text-white font-bold text-left font-grotesque text-[32px] md:text-[30px] lg:text-[50px] ">
              {description1}
            </h1>
          </div>
          <h1 className="text-white font-bold text-left font-grotesque text-[32px] md:text-[30px] lg:text-[50px] ">
            {description1b}
          </h1>
          <p className="text-whitetext text-left lg:w-[55%] md:w-[70%] w-full text-base md:text-lg lg:text-lg">
            {descri2}
          </p>
        </div>
      )}
      <div className="flex items-center gap-4 mt-10 md:mt-14">
        <Button
          name="Book a session"
          buttonClass="bg-white text-black text-xs md:text-sm lg:text-base w-[140px] md:w-[150px] p-3 md:p-4"
        />
        <Button
          name="Our Work"
          buttonClass="border border-white text-white text-xs md:text-sm lg:text-base w-[140px] md:w-[160px] p-3 md:p-4"
        />
      </div>
    </div>
  );
};

export default BannerInfo;
