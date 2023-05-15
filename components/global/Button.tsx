import React from "react";
interface Buttonsprops {
  onClick: any;
  label: string;
  color: string;
}

const Button = ({ onClick, label, color }: Buttonsprops) => {
  return (
    <button
      onClick={onClick}
      className={
        "bg-red-500 w-full py-3 text-black font-bold rounded-xl text-xl hover:scale-105 duration-500 hover:bg-red-400"
      }
    >
      {label}
    </button>
  );
};

export default Button;
