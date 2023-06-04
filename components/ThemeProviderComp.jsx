import { ThemeProvider } from "next-themes";
const ThemeProviderComp = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComp;
