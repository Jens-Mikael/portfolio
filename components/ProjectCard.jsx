import Link from "next/link";
import ToolBox from "./ToolBox";

const ProjectCard = ({ title, desc, tools, github, img }) => {
  return (
    <Link href={github}>
      <div className="group relative min-h-[223px] min-w-[400px] max-w-[850px] items-center justify-center overflow-x-clip rounded-lg text-slate-50 transition-shadow hover:shadow-xl hover:shadow-black/30">
        {/* Background image  */}
        <img
          className="h-full w-full object-cover text-white transition-transform duration-500 group-hover:scale-105"
          src={`projectBanners/${img}`}
          alt="No image :("
        />

        {/* Zoom and "opacity" effect  */}
        <div className="absolute inset-0 bg-transparent transition duration-500 group-hover:bg-black/60"></div>

        {/* The additional info  */}
        <div className="absolute inset-0 flex translate-y-[100%] flex-col justify-between px-3 py-2 transition-all duration-500 group-hover:translate-y-0 md:px-5 md:py-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex flex-col gap-1">
              <div className=" text-lg text-rose-500 sm:text-xl">{title}</div>

              <div className="h-[3px] w-full max-w-[75px] rounded-full bg-rose-500 sm:h-1" />
            </div>
            <div className="text-sm sm:text-base">{desc}</div>
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

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
//             lectus dignissim nisl pharetra consequat. Aliquam vehicula tortor
//             lacus, ac tincidunt nisi eleifend et.
