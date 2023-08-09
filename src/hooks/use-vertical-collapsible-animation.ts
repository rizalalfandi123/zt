import React from "react";
import useMeasure from "react-use-measure";
import { useSpring, config } from "@react-spring/web";

export const useVerticalCollapsibleAnimation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const [measureRef, { height }] = useMeasure();

  const styles = useSpring({
    config: config.stiff,
    from: {
      height: height,
    },
    to: {
      height: isOpen ? height : 0,
    },
  });

  return { setIsOpen, styles, measureRef, isOpen };
};
