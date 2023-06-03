const ToolBox = ({ children }) => {
  return (
    <div className="rounded-full border border-rose-700 bg-rose-950 text-rose-500 bg-opacity-60 px-2 py-1 text-sm sm:text-base sm:px-3 sm:py-1">
      {children}
    </div>
  );
};

export default ToolBox;
