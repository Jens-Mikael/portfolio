import Link from "next/link";
import ToolBox from "./ToolBox";

const ProjectCard = ({ title, desc, tools, github, img }) => {
  return (
    <Link href={github}>
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
        <div className="absolute inset-0 flex translate-y-[100%] overflow-auto flex-col justify-between px-3 py-2 transition-all duration-500 group-hover:translate-y-0 md:px-5 md:py-4">
          <div className="flex flex-col gap-1 sm:gap-3">
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
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
