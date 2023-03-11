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
    title: "Blog;",
    tags: ["HTML", "CSS"],
    description: "Build blog;",
    demoLink: "dmo link;",
    srcLink: "src link;",
  },
  {
    id: "2",
    title: "Blog;",
    tags: ["HTML", "CSS", "JS"],
    description: "Build blog;",
    demoLink: "dmo link;",
    srcLink: "src link;",
  },
  {
    id: "3",
    title: "Blog;",
    tags: ["HTML", "CSS", "JS", "REACT"],
    description: "Build blog;",
    demoLink: "dmo link;",
    srcLink: "src link;",
  },
  {
    id: "4",
    title: "Blog;",
    tags: ["HTML", "CSS", "JS", "NEXTJS"],
    description: "Build blog;",
    demoLink: "dmo link;",
    srcLink: "src link;",
  },
];
const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div>
      <div className="md:flex gap-2 hidden h-screen">
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
