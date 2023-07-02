import SideNav from "@/components/SideNav";
import Button from "@/components/Button";
import SkillCard from "@/components/SkillCard";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projectData, skills, text } from "@/data";
import ContactForm from "@/components/ContactForm";
import { Desc, Header, HeaderLine } from "@/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col overflow-y-scroll px-4 xs:px-8 sm:px-16 md:px-28 lg:px-44 xl:px-52">
      {/* HOME */}
      <div className="flex min-h-screen items-center justify-between gap-10">
        <div className="flex flex-1 flex-col gap-6">
          <div className="text-5xl font-extrabold xl:text-7xl">
            Hey, I&apos;m Jens, a Web Developer
          </div>
          <Desc>
            {text.home.introduction}
          </Desc>
          <Link href="#projects">
            <Button>Check out my Projects!</Button>
          </Link>
        </div>
        <SideNav num={1} />
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="flex min-h-screen items-center justify-between gap-10 py-28"
      >
        <div className="flex flex-col gap-10 pt-4">
          <div className="flex flex-col gap-6 pb-10">
            <Header>ABOUT ME</Header>
            <HeaderLine />
            <Desc>{text.about.introduction}</Desc>
          </div>
          <div className="flex flex-col gap-10 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold">Get to know me!</div>
              <div className="flex flex-col gap-5 pb-6 text-xl dark:text-gray-200">
                <div>{text.about.main[0]}</div>
                <div>{text.about.main[1]}</div>
                <div>{text.about.main[2]}</div>
              </div>
            </div>
            <div classname="flex flex-col w-1/2">
              <div className="text-3xl font-bold">My Skills</div>
              <div className="flex w-[300px] sm:w-[400px] flex-wrap gap-3 pt-5">
                {skills.map((i) => (
                  <SkillCard key={i}>{i}</SkillCard>
                ))}
              </div>
            </div>
          </div>
          <Link href="#contact">
            <Button>Send me a Message!</Button>
          </Link>
        </div>
        <SideNav num={2} />
      </div>

      {/* PROJECTS */}
      <div
        id="projects"
        className="flex min-h-screen items-center justify-between gap-10 py-28"
      >
        <div className="flex grow flex-col gap-16">
          <div className="flex flex-col gap-5">
            <Header>MY PROJECTS</Header>
            <HeaderLine />
            <Desc>
              {text.projects.introduction}
            </Desc>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-10 2xl:grid-cols-2">
            {projectData.map((i) => (
              <ProjectCard
                title={i.title}
                desc={i.desc}
                tools={i.tools}
                github={i.github}
                img={i.img}
                key={i}
              />
            ))}
          </div>
        </div>

        <SideNav num={3} />
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        className="flex min-h-screen items-center justify-between gap-10 py-28"
      >
        <div className="flex flex-col gap-5">
          <Header>CONTACT ME</Header>
          <HeaderLine />
          <Desc>
            {text.contact.introduction}
          </Desc>
          <ContactForm />
        </div>
        <SideNav num={4} />
      </div>
    </div>
  );
}
