import Link from "next/link";
import SkillCard from "./SkillCard";
import ToolBox from "./ToolBox";
import Button from "./Button";

const ProjectCard = () => {
  return (
    <div className="h-[400px] w-full max-w-[600px] group rounded-lg relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-slate-50">
      {/* Background image  */}

      <img
        class="h-full w-full text-white object-cover transition-transform duration-500 group-hover:scale-105"
        src="https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg"
        alt="No image :("
      />

      {/* Zoom and "opacity" effect  */}
      <div class="absolute inset-0 transition duration-500 bg-transparent group-hover:bg-black/60"></div>

      {/* The additional info  */}
      <div class="absolute inset-0 translate-y-[100%] flex flex-col justify-between p-10 transition-all duration-500 group-hover:translate-y-0">
        <div className="gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <div className="text-xl text-rose-500">Sociopedia</div>
            <div className="h-1 w-full max-w-[75px] bg-rose-500 rounded-full" />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            lectus dignissim nisl pharetra consequat. Aliquam vehicula tortor
            lacus, ac tincidunt nisi eleifend et.
          </div>
          <div className="flex flex-wrap gap-2">
            <ToolBox>React</ToolBox>
            <ToolBox>Tailwind</ToolBox>
            <ToolBox>Next</ToolBox>
            <ToolBox>Firebase</ToolBox>
            <ToolBox>React</ToolBox>
            <ToolBox>React</ToolBox>
          </div>
        </div>
        <Link
          href="/"
          className="border border-slate-50 w-min py-2 px-4 gap-2 items-center flex rounded-full hover:scale-110 transition"
        >
          <svg
            className="h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
          Repo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
