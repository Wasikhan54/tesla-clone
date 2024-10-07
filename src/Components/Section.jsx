import React from 'react'
// import { motion } from "framer-motion"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade.js'


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1> {title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Button>
        <Fade bottom>
        <ButtonGroup>

{rightBtnText && <RightButton>
  {rightBtnText}
</RightButton>}

<LeftButton>
  {leftBtnText}
</LeftButton>




</ButtonGroup>
        </Fade> 
        <DownArrow src="/images/down-arrow.svg" />

      </Button>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  
  height: 100vh;
  width: 100%;
background: ;
  background-image: ${props => `url("/images/${props.backgroundImg}")`};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ButtonGroup = styled.div`
 
display: flex;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  `

const Button = styled.div``