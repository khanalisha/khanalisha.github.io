import React from "react";
import styled from "styled-components";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({
  children,
  width = "auto",
  hidden,
  visible,
  delay = 1,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <REVEAL ref={ref} width={width}>
      <motion.div
        variants={{
          hidden: hidden,
          visible: visible,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </REVEAL>
  );
};

const REVEAL = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  /* overflow: hidden; */
`;
