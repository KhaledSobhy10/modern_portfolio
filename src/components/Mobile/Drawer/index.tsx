import { FunctionComponent, useEffect, ReactNode } from "react";
interface IDrawerProps {
  children: ReactNode;
}

const Drawer: FunctionComponent<IDrawerProps> = (props) => {
  useEffect(() => {
    const drawerELement = document.getElementById("drawer");
    const eventListener = (e: any) => {
      if (e.target.checked) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    drawerELement?.addEventListener("change", eventListener);

    return () => drawerELement?.removeEventListener("change", eventListener);
  }, []);
  return (
    <div className="drawer-container absolute top-0 left-0 z-10 ">
      <input
        type="checkbox"
        id="drawer"
        className="absolute top-0 left-0 w-0"
      />
      <label
        htmlFor="drawer"
        className="drawer-overlay block  h-screen bg-black/50"
      ></label>
      <div className="drawer-content absolute top-0 left-0  w-[290px] h-screen  drawer-content ml-[-290px]  w-80 bg-lightCompBg dark:bg-darkCompBg">
        {props.children}
      </div>
    </div>
  );
};

export default Drawer;
