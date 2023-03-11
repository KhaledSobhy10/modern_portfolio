import Image from "next/image";
import { FunctionComponent } from "react";
import Link from "next/link";
import NavLinks from "../NanLinks/index";

interface INavBarProps {}

const NavBar: FunctionComponent<INavBarProps> = (props) => {
  const handleThemeToggle = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };

  return (
    <div className="h-full  py-6 flex flex-col  items-center gap-3 ">
      <button
        className="md:w-7 w-5 dark:fill-white"
        onClick={() => handleThemeToggle()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Theme</title>
          <path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z" />
        </svg>
      </button>
      <NavLinks />
    </div>
  );
};

export default NavBar;
