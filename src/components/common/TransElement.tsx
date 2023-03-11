import { animated, useTransition } from "@react-spring/web";
import { FunctionComponent, ReactNode } from "react";

interface ITransELementProps {
  children: ReactNode;
  classNames?: string;
}

const TransELement: FunctionComponent<ITransELementProps> = (props) => {
  const transitions = useTransition(props.children, {
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
  });
  return transitions((style, item) => (
    <animated.div className={props.classNames} style={style}>
      {item}
    </animated.div>
  ));
};

export default TransELement;
