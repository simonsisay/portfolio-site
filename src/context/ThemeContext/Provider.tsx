import React, { useState } from "react";

export const ThemeContext = React.createContext({
  currentTheme: "dark",
  changeTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const changeTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else if (currentTheme === "light") setCurrentTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
