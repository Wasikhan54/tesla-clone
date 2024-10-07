import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Close } from '@mui/icons-material';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <a href="/">
            <img src="/images/logo.svg" alt="logo"/>
        </a>
        <Menu>
          <a href="/model-s"> Vehicles</a>
           <a href="/model-y"> Energy</a>
           <a href="/model-3">Charging</a>
           <a href="/model-x"> Discover</a>
           <a href="/model-x"> Shop</a> 
        </Menu>
        <RightMenu>
          <a href="/signin">Shop</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
         <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false) } /> 
         </CloseWrapper>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade-in</a></li>
          <li><a href=""> Demo Drive</a></li>
          <li><a href="">  CyberTruck</a></li>
          <li><a href="">  Roadster</a></li>
          <li><a href="">Semi</a></li>
          <li><a href=""> Charging</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
min-height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
z-index: 3;
position: fixed;
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  
  a{
  padding: 0 12px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  flex-wrap: nowrap;
  }
  @media (max-width: 768px){
    display: none;
  }
  `
  const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
  padding: 0 12px;

color: black;  font-weight: 500;
  font-size: 16px;
  flex-wrap: nowrap;
  }
  `
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 10px;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 999999;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
      font-weight: 600;
      color: black;
    }
  }
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;

`
const CloseWrapper = styled.div`   
  display: flex;
  justify-content: flex-end;
  align-items: center;

`