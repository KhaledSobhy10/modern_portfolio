import { useState, FunctionComponent } from "react";
import ProjectBox, { Project } from "./Project";

interface IProjectsBoxProps {
  projects: Project[];
}

type Tag = {
  id: string;
  title: string;
};

const ProjectsBox: FunctionComponent<IProjectsBoxProps> = ({ projects }) => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  console.log("🚀 ~ file: ProjectsBox.tsx:15 ~ selectedTags", selectedTags);

  function getTagsFromProjects() {
    const uniqueTags = new Set<string>();
    projects.forEach(({ tags }) => {
      tags.forEach((tag) => uniqueTags.add(tag));
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
    <div className={`m-3 h-fit flex flex-col gap-2`}>
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
              className={`md:text-base text-xs  border rounded-2xl py-1 px-6  active:scale-105 border-primary ${
                selectedTags?.has(tag) ? "bg-primary" : "dark:text-white"
              } transition-colors`}
              onClick={() => handleTagClicked(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="flex flex-col gap-2 ">
        {projects
          .filter(
            (projectData) =>
              selectedTags.size === 0 ||
              projectData.tags.some((tag) => selectedTags.has(tag))
          )
          .map((filteredProjectData) => (
            <ProjectBox project={filteredProjectData} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsBox;
