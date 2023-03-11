import * as React from "react";
import Link from "next/link";

import {
  Desktop_SECTION_PROJECTS,
  Desktop_SECTION_WORK,
} from "@/components/constants";
import { useRouter } from "next/router";

interface INavLinksProps {}

const NavLinks: React.FunctionComponent<INavLinksProps> = (props) => {
  const { asPath } = useRouter();

  const isActive = (href: string) => asPath === href;

  const getClass = (href: string) =>
    (isActive(href) ? "bg-variantPrimary" : " bg-par") +
    " flex w-10 h-10 p-2  rounded-full";
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <Link className={getClass("/")} href={`/`}>
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <title>Home</title>
              <path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={getClass(`/#${Desktop_SECTION_PROJECTS}`)}
            href={`/#${Desktop_SECTION_PROJECTS}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>projects</title>
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={getClass(`/#${Desktop_SECTION_WORK}`)}
            href={`/#${Desktop_SECTION_WORK}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-white`}
              viewBox="0 0 512 512"
            >
              <title>work</title>
              <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
