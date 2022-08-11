import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.bg};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HAROON.</Logo>
            <Description>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Description>
            <SocialContainer>
                <SocialIcon bg="#1877f2"><Facebook /></SocialIcon>
                <SocialIcon bg="#c32aa3"><Instagram /></SocialIcon>
                <SocialIcon bg="#1da1f2"><Twitter /></SocialIcon>
                <SocialIcon bg="#bd081c"><Pinterest /></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Order Tracking</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
            </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
    </Container>
  )
}

export default Footer