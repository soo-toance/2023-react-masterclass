import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back:boolean) => ({
    x: back ? -500 : 500,
    opacity:0,
    scale: 1,
  }),
  center: {
    x:0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  exit:  (back:boolean) => ({
    x: back ? 500 : -500,
    opacity:0,
    scale: 1,
  }),
};

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px; 
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);


  return (
    <Wrapper onClick={toggleClicked}>
          <Box>
            {!clicked ? <Circle layoutId="circle"/> : null }
          </Box> 

          <Box>
            {clicked ? <Circle layoutId="circle"/> : null }
          </Box> 
  </Wrapper>
  );
}
export default App;