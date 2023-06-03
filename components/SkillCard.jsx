const SkillCard = ({ children }) => {
  return (
    <div className="h-min rounded-md bg-slate-200 transition-transform hover:scale-110 dark:bg-slate-700 dark:text-slate-300 dark:shadow-xl px-5 py-2 text-base">
      {children}
    </div>
  );
};

export default SkillCard;
