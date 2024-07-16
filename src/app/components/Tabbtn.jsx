import React from "react";

const Tabbtn = ({ active, selecttab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-gray-400 border-b border-black";

  return (
    <button onClick={selecttab}>
      <p className={`mr-3 mt-5 font-semibold    ${buttonClasses} `}>
        {" "}
        {children}
      </p>
    </button>
  );
};

export default Tabbtn;
