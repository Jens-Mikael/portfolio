const SkillCard = ({children}) => {
  return (
    <div className="rounded-md dark:shadow-xl bg-slate-200 dark:bg-slate-700  dark:text-slate-300  hover:scale-110 transition px-5 py-2 h-min">
      {children}
    </div>
  )
}

export default SkillCard;