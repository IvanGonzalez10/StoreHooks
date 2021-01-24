import React, { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkode] = useState(false);

  const handleClick = () => {
    setDarkode(!darkMode);
  };
  return (
    <div className="Header">
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
};
