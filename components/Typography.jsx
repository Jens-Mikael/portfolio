export const Header = ({ children }) => (
  <div className="text-5xl sm:text-6xl font-bold text-red-500">{children}</div>
);

export const Desc = ({ children }) => (
  <div className="w-full max-w-[500px] sm:max-w-[600px] text-2xl text-gray-600 dark:text-gray-300">
    {children}
  </div>
);

export const Plain = () => {};

export const HeaderLine = () => (
  <div className="h-2 w-full max-w-[150px] sm:max-w-[200px] rounded-full bg-rose-500" />
);
