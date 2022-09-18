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
    width: 40%;
    padding: 30px;
    background-color: white;
`;
const Title = styled.h1`
    text-align: center;
    font-style: 24px;
    font-weight: 300;
    margin-bottom: 30px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I consent to the processing of my peronal data in accordance with the <b>Privacy Policy</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register