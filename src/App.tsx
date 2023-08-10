import styled from "styled-components";
import {motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};

// 색상 추가 시 rgb 형식으로 넣어야 애니메이션이 진행됨 
// backgroundColor: 'rgb(43,204,121)' 

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  over-flow: hidden;
`;


function App() {
  const x = useMotionValue(0);

  // motionValue는 리랜더링 하지 않기 때문에, useEffect 훅 활용해 console 찍어줘야 함 
  
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    potato.onChange(() => console.log(potato.get()))}
    , [x]
  );

  return (
    <Wrapper>
        <Box
          style={{ x , scale: potato }}
          dragSnapToOrigin
          drag="x"
        />
    </Wrapper>
  );
}
export default App;