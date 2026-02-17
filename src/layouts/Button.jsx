import React from "react";

const Button = ({ title, as = "button", ...props }) => {
  const Component = as;
  return (
    <div>
      <Component 
        className="bg-[#41a8d1] text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out cursor-pointer"
        {...props}
      >
        {title}
      </Component>
    </div>
  );
};

export default Button;
