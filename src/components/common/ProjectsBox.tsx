import { useState, FunctionComponent } from "react";
import ProjectBox, { Project } from "./Project";
import SectionHead from "./SectionHead";
import TransELement from "./TransElement";

interface IProjectsBoxProps {
  projects: Project[];
  sectionId?: string;
}

type Tag = {
  id: string;
  title: string;
};

const ProjectsBox: FunctionComponent<IProjectsBoxProps> = ({ projects }) => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  function getTagsFromProjects() {
    const uniqueTags = new Set<string>();
    projects.forEach(({ tags }) => {
      tags.forEach((tag) => uniqueTags.add(tag.toLocaleLowerCase()));
    });
    return Array.from(uniqueTags);
  }

  const handleTagClicked = (tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set<string>(prev);
      if (prev.has(tag)) newSet.delete(tag);
      else newSet.add(tag);
      return newSet;
    });
  };
  return (
    <div
      className={`m-1 h-fit flex flex-col gap-2 justify-center items-center`}
    >
      <SectionHead
        title="My Projects"
        description="Some of my side projects and technologies that i used to build it"
      />
      <div
        className={`w-full h-fit md:p-8 p-4 flex flex-col gap-4 md:gap-6 bg-lightCompBg dark:bg-darkCompBg `}
      >
        <strong
          className={`text-lg dark:text-white`}
        >{`Projects (${projects.length})`}</strong>
        {/* tags */}
        <div className={`flex w-full flex-wrap gap-4 md:gap-6 `}>
          <button
            className={` md:text-base text-xs border rounded-2xl py-1 px-6  active:scale-105 border-primary ${
              selectedTags?.size ? "dark:text-white" : "bg-primary"
            } transition-colors`}
            onClick={() => setSelectedTags(() => new Set())}
          >
            {"All"}
          </button>
          {getTagsFromProjects().map((tag) => (
            <button
              key={tag}
              className={`capitalize md:text-base text-xs  border rounded-2xl py-1 px-6  active:scale-105 border-primary ${
                selectedTags?.has(tag) ? "bg-primary" : "dark:text-white"
              } transition-colors`}
              onClick={() => handleTagClicked(tag)}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="w-full grid grid-cols-projectsGrid gap-2 ">
        {projects
          .filter(
            (projectData) =>
              selectedTags.size === 0 ||
              projectData.tags.some((tag) =>
                selectedTags.has(tag.toLocaleLowerCase())
              )
          )
          .map((filteredProjectData) => (
            <ProjectBox
              project={filteredProjectData}
              key={filteredProjectData.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectsBox;
