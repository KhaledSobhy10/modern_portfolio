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
    <div className="h-[600px] w-full bg-lightCompBg dark:bg-darkCompBg  p-4 lg:p-6 md:p-4 flex flex-col  md:gap-2 gap-1 overflow-auto">
      <img className="rounded h-40%" width="269" />
      <div className="flex flex-col flex-1 lg:gap-4 md:gap-2 gap-1">
        <div className="text-secondary dark:text-white flex flex-wrap gap-1 md:gap-3">
          {props.project.tags.map((tag) => (
            <span key={tag}>#{tag.toUpperCase()}</span>
          ))}
        </div>
        <strong className="text-secondary dark:text-white text-2xl	capitalize">
          {props.project.title}
        </strong>
        <p className="flex-1 text-secondaryText h-[100px] ">
          {/* In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. */}
          {props.project.description}
        </p>
        <div className="flex gap-2 justify-start">
          <a
            className="bg-primary underline py-2 px-8 "
            href={props.project.demoLink}
            target="_blank"
          >
            Demo
          </a>
          <a
            className="bg-variantSecondary text-white py-2 px-8 capitalize "
            href={props.project.srcLink}
            target="_blank"
          >
            {"<code/>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
