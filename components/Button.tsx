import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
interface buttonProps {
  name: string;
  buttonClass: string;
  icon?: boolean;
  icon2?: boolean;
  id?: number;
  onclick?: () => void;
}
const Button = ({ name,icon2, onclick, buttonClass, icon }: buttonProps) => {
  return (
    // p-4 w-40 bg-[#181818] text-white
    <button
      onClick={onclick}
      className={`${buttonClass} rounded-full flex items-center justify-center`}
    >
      {name}
      {icon2 && <MdOutlineArrowOutward className="ml-4" />}
      {icon && <FaArrowRight className="ml-4" />}
    </button>
  );
};

export default Button;
