import React from 'react'
import styled from 'styled-components'
import signupBG from '../images/signup-bg.jpg'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${signupBG}) bottom;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 30px;
    background-color: white;
`;
const Title = styled.h1`
    text-align: center;
    font-style: 24px;
    font-weight: 300;
    margin-bottom: 10px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-style: 12px;
    text-decoration: underline;
    cursor: pointer;
`; 

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSOWRD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login