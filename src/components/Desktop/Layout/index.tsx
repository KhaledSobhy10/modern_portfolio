import SideBar from "@/components/common/SideBar";
import * as React from "react";
import Intro from "@/components/common/Intro";
import ProjectsBox from "@/components/common/ProjectsBox";
import NavBar from "../navBar";
import WorkExperience from "@/components/common/WorkExperience";
import { Desktop_SECTION_WORK } from "@/components/constants";
import { Desktop_SECTION_PROJECTS } from "../../constants";
import { Project } from "@/components/common/Project";

interface ILayoutProps {}
const projects: Project[] = [
  {
    id: "1",
    title: "kanban Task Management",
    tags: ["HTML", "CSS", "JS", "React", "tailwindcss"],
    description:
      "kanban Task Management board have features like create board and add tasks and task have sub task darg & drop ",
    demoLink: "https://stellar-paletas-0aa871.netlify.app/",
    srcLink: "https://github.com/KhaledSobhy10/Task-Management",
  },
  {
    id: "2",
    title: "Search Countries app",
    tags: ["HTML", "CSS", "JS", "React", "tailwindcss"],
    description:
      "Search Countries Web app have search by name and get all details about country Native Name , Region , Population and borders",
    demoLink: "https://gorgeous-alpaca-9ec8f1.netlify.app/",
    srcLink:
      "https://github.com/KhaledSobhy10/REST-Countries-API-with-color-theme-switcher",
  },
  {
    id: "3",
    title: "Insta clone",
    tags: ["HTML", "CSS", "JS", "REACT", "FIREBASE", "tailwindcss"],
    description: "Instagram clone with react and firebase as backend",
    demoLink: "https://github.com/KhaledSobhy10/insta-clone",
    srcLink: "https://github.com/KhaledSobhy10/insta-clone",
  },
];
const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div>
      <div className="md:flex gap-2 hidden">
        <div className="w-[270px] overflow-hidden relative">
          <div className="dark:bg-darkCompBg bg-white h-screen fixed w-[270px]">
            <SideBar />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 lg:m-4 md:m-3 m-1 pb-3">
          <Intro />
          <ProjectsBox
            projects={projects}
            sectionId={Desktop_SECTION_PROJECTS}
          />
          <WorkExperience sectionId={Desktop_SECTION_WORK} />
        </div>

        <div className="w-[60px]">
          <div className="dark:bg-darkCompBg bg-white h-screen w-[60px] fixed">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
