import Link from "next/link";

const SideNav = ({ num }) => {
  return (
    <div className="items-center flex flex-col w-min">
      <Link href="#home" className={`rounded-full hover:scale-125 transition ${num === 1 ? "border border-rose-500" : "bg-rose-500"} h-4 w-4`} />
      <div  className="h-12 w-0 border-r border-slate-400 dark:border-gray-500" />
      <Link href="#about"  className={`rounded-full hover:scale-125 transition ${num === 2 ? "border border-rose-500" : "bg-rose-500"} h-4 w-4`} />
      <div  className="h-12 w-0 border-r border-slate-400 dark:border-gray-500" />
      <Link href="#projects"  className={`rounded-full hover:scale-125 transition ${num === 3 ? "border border-rose-500" : "bg-rose-500"} h-4 w-4`} />
      <div  className="h-12 w-0 border-r  border-slate-400 dark:border-gray-500" />
      <Link href="#contact"  className={`rounded-full hover:scale-125 transition ${num === 4 ? "border border-rose-500" : "bg-rose-500"} h-4 w-4`} />
      
      </div>
  );
};2

export default SideNav;
