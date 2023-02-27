import { FunctionComponent } from "react";

export type Project = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  demoLink: string;
  srcLink: string;
};
interface IProjectProps {
  project: Project;
}

const ProjectBox: FunctionComponent<IProjectProps> = (props) => {
  return (
    <div className="h-fit w-full bg-lightCompBg dark:bg-darkCompBg   p-4 lg:p-6 md:p-4 flex flex-wrap lg:gap-6 md:gap-4 gap-2">
      <img className="rounded" height="260" width="269" />
      <div className="flex flex-col flex-1 lg:gap-6 gap-4">
        <div className="text-secondary dark:text-white flex flex-wrap gap-2 md:gap-4">
          {props.project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <strong className="text-secondary dark:text-white text-2xl	">
          Blog
        </strong>
        <p className="flex-1 text-secondaryText">
          In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
        </p>
        <div className="flex gap-2 justify-start">
          <button className="bg-primary underline py-2 px-8 ">Demo</button>
          <button className="bg-variantSecondary text-white py-2 px-8 capitalize ">
            {"<code/>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
