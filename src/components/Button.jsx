import React from "react";

function Button({ children, extraStyles }) {
  return (
    <button
      className={`self-start rounded-md border-2 border-primary-dark px-6 py-2 font-montserrat text-lg font-semibold text-primary-dark transition-colors active:bg-primary-dark active:text-white lg:hover:bg-primary-dark lg:hover:text-white ${extraStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
