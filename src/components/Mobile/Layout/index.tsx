import * as React from "react";
import Intro from "@/components/common/Intro";
import ProjectsBox from "../../common/ProjectsBox";
import WorkExperience from "@/components/common/WorkExperience";
import Header from "../Header/index";
import SideBar from "../../common/SideBar/index";
import Drawer from "../Drawer";
import { Project } from "@/components/common/Project";
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
interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="md:hidden block">
      <Header />
      <Drawer>
        <SideBar />
      </Drawer>
      <main>
        <div className="flex flex-col gap-3 m-2">
          <Intro />
          <ProjectsBox projects={projects} />
          <WorkExperience />
        </div>
      </main>
    </div>
  );
};

export default Layout;
