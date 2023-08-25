import React from 'react'
import { Link } from 'react-router-dom'
import {styled } from 'styled-components'


const Container = styled.div`
    /* max-height: 100vh;  */
    position: sticky;
    top: 0;
    height: 50px;
    border-bottom: 1px solid #887878;
    z-index: 1;
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.colorText};
    /* overflow-y: hidden; */
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
`
const StyledInput = styled.input`
  outline: none;
  width: 450px;
  height: 26px;
  background-color: transparent;
  border-radius: 5px;
  color: ${({theme}) => theme.colorText};
  cursor: pointer;
  position: absolute;
  left: 23%;
  padding-left: 6px;
  border: 1px solid #666 ;
`
const StyledSignt = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 80px;
  height: 26px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid blue;
  color: blue;   
  cursor: pointer;
  position: absolute;
  right: 2%;
`
function Navbar({theme, setTheme}) {
  
  return (
    <Container>
        <Wrapper>
          < StyledInput placeholder='search...'/>
          <StyledSignt ><Link to="/login" style={{textDecoration: "none"}}>Login</Link></StyledSignt>
        </Wrapper>
    </Container>
  )
}

export default Navbar
