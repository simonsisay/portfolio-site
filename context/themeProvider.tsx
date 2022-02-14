import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  switchTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
