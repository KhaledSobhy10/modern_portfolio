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
