"use client";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

export interface ThemeContextData {
  isDark: boolean;
  handleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = Cookies.get("theme");

  const setDarkTheme = useCallback((): boolean => {
    typeof window !== "undefined" &&
      document.documentElement.classList.add("dark");
    Cookies.set("theme", "dark", { expires: 365 });
    return true;
  }, []);

  const setLightTheme = useCallback((): boolean => {
    typeof window !== "undefined" &&
      document.documentElement.classList.remove("dark");
    Cookies.set("theme", "light", { expires: 365 });
    return false;
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (theme !== "dark" || !theme || theme === undefined) {
      return setLightTheme();
    }
    return setDarkTheme();
  });

  const handleDarkMode = useCallback(() => {
    typeof window !== "undefined" &&
      setIsDark(
        !document.documentElement.classList.contains("dark")
          ? setDarkTheme()
          : setLightTheme()
      );
  }, [setDarkTheme, setLightTheme]);

  useEffect(() => {
    setIsDark(
      !theme || theme === undefined || isDark ? setDarkTheme() : setLightTheme()
    );
  }, [setDarkTheme, setLightTheme, theme, isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        handleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }

  return context;
};

export { ThemeProvider };
