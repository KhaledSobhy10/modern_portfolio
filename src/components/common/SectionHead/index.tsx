import { FunctionComponent } from "react";

interface ISectionHeadProps {
  title: string;
  description: string;
}

const SectionHead: FunctionComponent<ISectionHeadProps> = (props) => {
  return (
    <div className="text-center flex flex-col gap-6">
      <strong className="text-3xl dark:text-white capitalize">
        {props.title}
      </strong>
      <p className="capitalize text-center">{props.description}</p>
    </div>
  );
};

export default SectionHead;
