import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

interface IIntroProps {
  extraStyle?: string;
}

const Intro: FunctionComponent<IIntroProps> = (props) => {
  return (
    <div
      className={`relative py-4 bg-lightCompBg dark:bg-darkCompBg flex flex-col items-center justify-center gap-8 ${props?.extraStyle}`}
    >
      <h1 className="w-fit font-bold text-center text-secondary  dark:text-white flex flex-col gap-1">
        <span>Khaled</span>
        <span>Sobhy</span>
        <span className="text-primary">Front-end</span>
        <span>Developer</span>
      </h1>
      {/* shapes */}
      <div className="absolute top-10 left-10 w-3 h-3 rounded-full border-2 border-pink-500 "></div>
      <div className="absolute bottom-5 right-5 w-3 h-3 rounded-full border-2 border-blue-500"></div>
      <div className="absolute bottom-5 left-10">
        <div className="w-1 h-4 bg-variantPrimary translate-x-[10px] translate-y-[20px] rotate-[332deg]"></div>
        <div className="w-1 h-4 bg-variantPrimary translate-x-[3px] translate-y-[4px] rotate-[28deg]"></div>
        <div className="w-4 h-1 bg-variantPrimary "></div>
      </div>
      <div className="absolute top-0 right-5">
        <div className="w-1 h-4 bg-green-500 translate-x-[10px] translate-y-[20px] rotate-[332deg]"></div>
        <div className="w-1 h-4 bg-green-500 translate-x-[3px] translate-y-[4px] rotate-[28deg]"></div>
        <div className="w-4 h-1 bg-green-500 "></div>
      </div>
      <div className="absolute top-50 left-5 w-3 h-3 border border-2 border-[#FF2E00CC] rotate-45"></div>
      <div className="absolute top-50 right-5 w-3 h-3 border border-2 border-[#0047FF] rotate-45"></div>
      {/* end of shapes */}
      <Link
        href="mailto:khaledsobhyanwar@gmail.com?subject=Hiring&amp;body=We want hire you khaled"
        className="rounded uppercase bg-variantPrimary px-4 py-2 font-medium flex items-center gap-3"
      >
        hire me
        <Image src="/arrow-forward-outline.svg" width={20} height={20} alt="" />
      </Link>
    </div>
  );
};

export default Intro;
