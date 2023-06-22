import React from "react";

const Badge = ({ title }) => {
  return (
    <div className="select-none mx-2 antialiased hover:bg-teal-500 hover:text-carmine hover:transition-all duration-500 max-w-[95px] my-2 w-full text-center dark:text-teal-400 hover:dark:text-carmine bg-slate-800 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border dark:border-teal-500">
      {title}
    </div>
  );
};

export default Badge;
