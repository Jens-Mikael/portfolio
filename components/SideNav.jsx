import Link from "next/link";

const SideNav = ({ num }) => {
  return (
    <div className="sm:flex w-min flex-col items-center hidden">
      <Link
        href="#home"
        className={`rounded-full transition hover:scale-125 ${
          num === 1 ? "border border-rose-500" : "bg-rose-500"
        } h-4 w-4`}
      />
      <div className="h-12 w-0 border-r border-slate-400 dark:border-gray-500" />
      <Link
        href="#about"
        className={`rounded-full transition hover:scale-125 ${
          num === 2 ? "border border-rose-500" : "bg-rose-500"
        } h-4 w-4`}
      />
      <div className="h-12 w-0 border-r border-slate-400 dark:border-gray-500" />
      <Link
        href="#projects"
        className={`rounded-full transition hover:scale-125 ${
          num === 3 ? "border border-rose-500" : "bg-rose-500"
        } h-4 w-4`}
      />
      <div className="h-12 w-0 border-r  border-slate-400 dark:border-gray-500" />
      <Link
        href="#contact"
        className={`rounded-full transition hover:scale-125 ${
          num === 4 ? "border border-rose-500" : "bg-rose-500"
        } h-4 w-4`}
      />
    </div>
  );
};
2;

export default SideNav;
