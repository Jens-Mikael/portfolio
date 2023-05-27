import { ThemeProvider } from "next-themes";

const ThemeProviderComp = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviderComp;
