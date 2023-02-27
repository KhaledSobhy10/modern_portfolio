import Header from "@/components/Mobile/Header";
import Intro from "@/components/Mobile/Sections/Intro";
import Head from "next/head";
import SideBar from "@/components/common/SideBar/index";
import { Project } from "@/components/common/Project";
import ProjectsBox from "@/components/common/ProjectsBox";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Portfolio of 'Khaled sobhy' frontend developer ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <SideBar />

      <main>
        <Intro />
        <ProjectsBox projects={projects} />
      </main>
    </>
  );
}
