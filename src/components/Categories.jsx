import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'

const Container = styled.div`
  display: flex;
  margin: 25px;
`;
const CategoryItem = styled.div`
  height: 80vh;
  flex: 1;
  background-color: lightBlue;
  margin: 5px;
  background: url(${props => props.bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
  font-size: 42px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled.button`
border-radius: 0px;
color: #000000;
font-size: 20px;
background: #ffffff;
padding: 10px 20px;
border-style: none;
cursor: pointer;
`;

const Categories = () => {
  return (
    <Container>
        {categories.map((categ) => (
            <CategoryItem key={categ.id} bg={categ.img}>
                <Wrapper>
                    <Title>{categ.title}</Title>
                    <Button>SHOP NOW</Button>
                </Wrapper>
            </CategoryItem>
        ))}
    </Container>
  )
}

export default Categories