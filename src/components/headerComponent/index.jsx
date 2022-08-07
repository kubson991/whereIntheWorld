import { useState } from "react";
import "./App.scss";

function setNewMode(active) {
  const body = document.documentElement.getElementsByTagName("body")[0];
  if (!active) {
    body.style.setProperty("--Elements", "var(--DarkModeElements)");
    body.style.setProperty("--Background", "var(--DarkModeBackground)");
    body.style.setProperty("--Text", "var(--lightModeElementsAndDarkModeText)");
    body.style.setProperty(
      "--placeHolder",
      "var(--lightModeElementsAndDarkModeText)"
    );
  } else {
    body.style.setProperty(
      "--Elements",
      "var(--lightModeElementsAndDarkModeText)"
    );
    body.style.setProperty("--Background", "var(--lightModeBackground)");
    body.style.setProperty("--Text", "var(--lightModeText)");
    body.style.setProperty("--placeHolder", "var(--lightModeInput)");
  }
}

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    setDarkMode(!darkMode);
    setNewMode(darkMode);
  }

  return (
    <header className="Header">
      <h1>Where in the world?</h1>
      <div className="darkModeContainer" onClick={changeDarkMode}>
        <span className="material-icons-outlined icon">dark_mode</span>
        <span className="text">Dark Mode</span>
      </div>
    </header>
  );
}

export default Header;
