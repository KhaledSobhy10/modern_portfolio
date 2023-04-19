import { FunctionComponent } from "react";
import SectionHead from "../SectionHead";

interface IWorkExperienceProps {
  sectionId?: string;
}

const WorkExperience: FunctionComponent<IWorkExperienceProps> = (props) => {
  return (
    <div
      id={props?.sectionId}
      className="m-1   boxing-border flex flex-col items-center justify-center gap-3 rounded"
    >
      <SectionHead
        title="work experience"
        description="its my current and previous experience i have"
      />
      <div className="md:p-6 p-3 w-full flex flex-col gap-3 bg-lightCompBg dark:bg-darkCompBg dark:text-white">
        {/* Experience */}
        <div className="flex md:gap-1 gap-4 flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-3 lg:w-1/4 md:2/4 w-full">
            <strong className="text-lg capitalize">EaswaaqMisr</strong>
            <div className="flex gap-2 items-center ">
              <span className="capitalize">Full time</span>
              <span className="bg-variantPrimary p-1 capitalize">
                9/22 - Current
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:w-3/4 md:2/4 w-full">
            <strong className="capitalize">Frontend Developer</strong>
            <p className="capitalize">
              I Contribute With a Technology Team To Build New Websites From
              Scratch , Fix And Debug And Restyle The Existing Ones
            </p>
          </div>
        </div>
        {/*End Experience */}
        <div className=" w-full border dark:border-secondary"></div>
        {/* Experience */}
        <div className="flex md:gap-1 gap-4 flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-3 lg:w-1/4 md:2/4 w-full">
            <strong className="text-lg capitalize">EaswaaqMisr</strong>
            <div className="flex gap-2 items-center ">
              <span className="capitalize">intern</span>
              <span className="bg-variantPrimary p-1">4/22 - 9/22</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:w-3/4 md:2/4 w-full">
            <strong className="capitalize">Frontend Developer</strong>
            <p className="capitalize">
              I learn some git concepts and work on project built with react
            </p>
          </div>
        </div>
        {/*End Experience */}
      </div>
    </div>
  );
};

export default WorkExperience;
