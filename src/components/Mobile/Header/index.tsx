import { FunctionComponent } from "react";

import menuIcon from "public/menu-sharp.svg";
import Link from "next/link";
interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const handleThemeToggle = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };
  return (
    <header className="bg-lightCompBg dark:bg-darkCompBg shadow-md sticky">
      <div className="mx-auto container py-2 px-4 flex justify-between">
        <label htmlFor="drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-8 w-6 dark:fill-white cursor-pointer outline-none bg-transparent"
            viewBox="0 0 512 512"
          >
            <title>Menu</title>
            <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
          </svg>
        </label>

        <button
          className="md:w-7 w-5 dark:fill-white"
          onClick={() => handleThemeToggle()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Theme</title>
            <path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
