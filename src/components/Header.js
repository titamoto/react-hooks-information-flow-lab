import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "dark" : "light"} Mode
      </button>
      {/* <button onClick={modeState ? "dark" : "light"}> Mode</button> */}
    </header>
  );
}

export default Header;
