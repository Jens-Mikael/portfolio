"use client";
import { useState } from "react";
import SideNav from "@/components/SideNav";
import Button from "@/components/Button";
import SkillCard from "@/components/SkillCard";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  "Web Development",
  "Javascript",
  "HTML",
  "CSS",
  "Tailwind",
  "Material UI",
  "React",
  "Next",
  "Python",
  "Pygame",
  "Responsive Design",
  "GIT",
  "Github",
  "Terminal",
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className=" overflow-y-scroll flex flex-col px-8 sm:px-16 md:px-28 lg:px-44 xl:px-52">
      {/* HOME */}
      <div className="flex items-center gap-10 justify-between min-h-screen">
        <div className="flex flex-col flex-1 gap-6">
          <div className="text-5xl xl:text-7xl font-extrabold">
            Hey, I'm Jens, a Web Developer
          </div>
          <div className="w-2/3 text-xl xl:text-2xl text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            lectus dignissim nisl pharetra consequat. Aliquam vehicula tortor
            lacus, ac tincidunt nisi eleifend et.
          </div>
          <Link href="#projects">
            <Button>Check out my Projects!</Button>
          </Link>
        </div>
        <SideNav num={1} />
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="flex items-center justify-between gap-10 min-h-screen"
      >
        <div className="flex flex-col gap-10 pt-4">
          <div className="flex flex-col gap-6 pb-10">
            <div className="text-6xl font-bold text-red-500">ABOUT ME</div>
            <div className="h-2 w-full max-w-[200px] bg-rose-500 rounded-full" />

            <div className="w-full max-w-[600px] text-2xl text-gray-600 dark:text-gray-300">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology.
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold">Get to know me!</div>
              <div className="text-xl pb-6 dark:text-gray-200">
                Vivamus ac ex ante. Proin est metus, rhoncus id euismod nec,
                elementum et lacus. Nunc pulvinar, purus vel sagittis faucibus,
                orci tortor scelerisque ipsum, sed varius odio augue sed eros.
                Vestibulum placerat consequat orci id scelerisque.
                <br />
                <br />
                Cras lobortis odio in quam finibus eleifend ut eu sapien.
                Integer eget vehicula erat, at vestibulum est. Curabitur ac
                elementum ligula. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam blandit porta scelerisque. Mauris sed
                tellus magna. Quisque hendrerit sollicitudin ipsum nec eleifend.
                <br />
                <br />
                Aliquam vitae tristique nunc, id tincidunt lacus. Phasellus eu
                lacinia diam. Integer eget nulla magna. Nam semper nisl velit,
                ac porttitor tortor lobortis eu. Maecenas et condimentum nunc.
                Etiam pellentesque neque ligula, vel ultricies tortor tristique
                ut. Nunc laoreet odio mi, congue lacinia justo auctor ut.
              </div>
            </div>
            <div classname="flex flex-col w-1/2">
              <div className="text-3xl font-bold">My Skills</div>
              <div className="flex flex-wrap w-[400px] gap-3 pt-5">
                {skills.map((i) => (
                  <SkillCard>{i}</SkillCard>
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
        className="flex justify-between items-center gap-10 py-16 min-h-screen "
      >
        <div className="flex flex-col grow gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-6xl font-bold text-red-500">MY PROJECTS</div>
            <div className="h-2 w-full max-w-[200px] bg-rose-500 rounded-full" />
            <div className="w-full max-w-[600px] text-2xl text-gray-600 dark:text-gray-300">
              Here you will find some of my projects that I've made each with a short description and the tools I used in the development
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        <SideNav num={3} />
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        className="min-h-screen flex items-center gap-10 justify-between"
      >
        <div className="flex flex-col gap-5">
          <div className="text-6xl font-bold text-red-500">CONTACT ME</div>
          <div className="h-2 w-full max-w-[200px] bg-rose-500 rounded-full" />
          <div className="w-full max-w-[600px] text-2xl text-gray-600 dark:text-gray-300">
            Feel free to Contact me by submitting the form below and I will get
            to you as soon as possible
          </div>
          <div className="flex flex-col gap-5 mt-10 px-10 py-10  w-full max-w-[600px] border border-slate-200 dark:border-slate-500 bg-white dark:bg-slate-700 rounded-xl ">
            <div className="flex flex-col gap-2">
              <div className=" dark:text-slate-300 font-semibold dark:font-bold">Name</div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="py-2 px-3 w-1/2 rounded-lg bg-transparent border border-slate-400 focus:outline-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="dark:text-slate-300 font-semibold dark:font-bold">Email</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="py-2 px-3 w-1/2 rounded-lg bg-transparent border border-slate-400 focus:outline-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="dark:text-slate-300 font-semibold dark:font-bold">Message</div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8"
                className="py-2 px-3 resize-none bg-transparent border w-full border-slate-400 rounded-lg focus:outline-blue-400 "
              />
            </div>
            <div className="flex flex-row-reverse">
              <button className="text-slate-50 bg-rose-500 font-bold py-3 px-8  w-min rounded-md hover:scale-110 transition">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <SideNav num={4} />
      </div>
    </div>
  );
}
