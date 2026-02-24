import React from "react";

const Button = ({ title, as = "button", className, ...props }) => {
  const Component = as;
  return (
    <div>
      <Component 
        className={`bg-[#41a8d1] text-white px-4 py-2 rounded-md hover:bg-[#2d8fb8] transition duration-300 ease-in-out cursor-pointer ${className}`}
        {...props}
      >
        {title}
      </Component>
    </div>
  );
};

export default Button;
