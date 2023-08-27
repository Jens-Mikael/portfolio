import Link from "next/link";
import ToolBox from "./ToolBox";

const ProjectCard = ({ title, desc, tools, github, img }) => {
  return (
    <div className="group relative min-h-[167px] min-w-[300px] max-w-[850px] items-center justify-center overflow-x-clip rounded-lg text-slate-50 transition-shadow hover:shadow-xl hover:shadow-black/30">
      {/* Background image  */}
      <img
        className="w-full h-full object-cover overflow-hidden text-white transition-transform duration-500 group-hover:scale-105"
        src={`projectBanners/${img}`}
        alt="No image :("
      />

      {/* Zoom and "opacity" effect */}
      <div className="absolute inset-0 bg-transparent transition duration-500 group-hover:bg-black/60" />

      {/* The additional info  */}
      <div className="absolute inset-0 flex translate-y-[100%] overflow-auto flex-col justify-between px-3 py-2 gap-5 transition-all duration-500 group-hover:translate-y-0 md:px-5 md:py-4">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col sm:gap-2">
            <div className=" text-lg text-rose-500 sm:text-xl">{title}</div>

            <div className="h-[3px] w-full max-w-[75px] rounded-full bg-rose-500 sm:h-1" />
          </div>
          <div className="text-sm sm:text-base leading-tight xs:leading-snug sm:leading-normal">
            {desc}
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <ToolBox key={tool}>{tool}</ToolBox>
            ))}
          </div>
        </div>
        <Link href={github}>
          <div className="flex flex-row gap-2 items-center rounded-full bg-white/10 border border-white/50 px-2.5 py-2 text-sm sm:text-base sm:px-3 sm:py-2 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 sm:h-6 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div>Github</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
