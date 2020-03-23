import React from "react";

const Link = ({ children, onClick, active }) => {
  if (!active) {
    return <span>{children}</span>;
  }

  return (
    <a
      onClick={e => {
        onClick?.();
        e.preventDefault();
      }}
      href="#"
    >
      {children}
    </a>
  );
};

export default Link;
