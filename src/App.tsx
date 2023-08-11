import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  initial: {
    x:500,
    opacity:0,
    scale: 1,
  },
  visible: {
    x:0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  leaving: {
    x:-500,
    opacity:0,
    scale: 0
  },
};



function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));

  return (
    <Wrapper>
       <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            i === visible ? <Box 
                key={i} 
                variants={box} 
                initial="initial" 
                animate="visible" 
                exit="leaving">{i}</Box> 
              : null
          ))}
       </AnimatePresence>
       <button onClick={nextPlease}>next</button>
  </Wrapper>
  );
}
export default App;