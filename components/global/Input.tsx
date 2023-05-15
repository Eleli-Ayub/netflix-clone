import React from "react";
interface Prosp {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input = ({ id, onChange, value, label, type }: Prosp) => {
  return (
    <div className=" relative flex items-center justify-center ">
      <input
        className="block rounded-md px-6 pt-6 pb-1 w-full text-,d text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 mb-10 peer"
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder=" "
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-0 left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
