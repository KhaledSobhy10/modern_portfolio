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
        <span className="text-primary animate-pulse">Front-end</span>
        <span>Developer</span>
      </h1>
      {/* shapes */}
      {/* <div className="absolute top-10 left-10 w-3 h-3 rounded-full border-2 border-pink-500 "></div>
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
      <div className="absolute top-50 right-5 w-3 h-3 border border-2 border-[#0047FF] rotate-45"></div> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 fill-primary absolute top-5 left-5 animate-pulse"
        viewBox="0 0 512 512"
      >
        <title>Logo Html5</title>
        <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 fill-primary absolute top-30 md:left-10  left-5 animate-spin-slow"
        viewBox="0 0 512 512"
      >
        <title>Logo React</title>
        <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
        <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 text-primary absolute top-30 md:right-10  right-5 animate-pulse"
        viewBox="0 0 512 512"
      >
        <title>Git Branch</title>
        <circle
          cx="160"
          cy="96"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="160"
          cy="416"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M160 368V144"
        />
        <circle
          cx="352"
          cy="160"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M352 208c0 128-192 48-192 160"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 fill-primary absolute top-5 right-5 animate-bounce"
        viewBox="0 0 512 512"
      >
        <title>Logo Css3</title>
        <path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 fill-primary absolute bottom-5 left-5 animate-bounce"
        viewBox="0 0 512 512"
      >
        <title>Logo Javascript</title>
        <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 33"
        className="w-10 fill-primary absolute bottom-7 right-5 animate-wiggle"
      >
        <g clipPath="url(#prefix__clip0)">
          <path
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h54v32.4H0z" />
          </clipPath>
        </defs>
      </svg>
      {/* end of shapes */}
      <Link
        href="mailto:khaledsobhyanwar@gmail.com?subject=Hiring&amp;body=We want hire you khaled"
        className="rounded uppercase bg-variantPrimary px-4 py-2 font-medium flex items-center gap-3 "
      >
        hire me
        <Image
          src="/arrow-forward-outline.svg"
          width={20}
          height={20}
          alt=""
          className="animate-bounce-left"
        />
      </Link>
    </div>
  );
};

export default Intro;
