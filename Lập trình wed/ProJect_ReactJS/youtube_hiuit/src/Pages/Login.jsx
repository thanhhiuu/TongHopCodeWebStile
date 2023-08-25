import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    position:relative;
    height: 93vh;

`
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #666;
    width: 320px;
    height: 470px;
`
const LoginWrapper = styled.div`
    height: 90%;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`
const Title = styled.div`
    text-align: center;
    text-transform:uppercase;
    font-size: 25px;
    font-weight: bold;
`
const InputLogin = styled.input`
    margin: 12px;
    width: 90%;
    color: ${({ theme }) => theme.colorText};
    background-color: transparent;
    border: 1px solid #666;        
    outline: none;
`
const ButtonSign = styled.button`
  color: ${({ theme }) => theme.colorText};
  background: transparent;
  border: 1px solid #666;
`
function Login() {
  return (
    <Container>
      <Wrapper>
        <LoginWrapper>
          <Title>Login</Title>
          <InputLogin placeholder='username' />
          <InputLogin placeholder='password' />
          <div style={{ textAlign: "center", margin: "6px", border: "1px solid #666", padding: "10px 0px" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "-10", margin: "10px 0px"}}>
              <ButtonSign>Đăng nhập</ButtonSign>
            </div>
            Or</div>
          <InputLogin placeholder='username' />
          <InputLogin placeholder='email' />
          <InputLogin placeholder='password' />
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "-10" }}>
            <ButtonSign>Đăng nhập</ButtonSign>
          </div>
        </LoginWrapper>
      </Wrapper>
    </Container>
  )
}

export default Login
