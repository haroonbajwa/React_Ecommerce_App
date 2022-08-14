import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import denimjumpsuit from '../images/denimjumpsuit.jpg'
import { color } from '@mui/system'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Price = styled.h3`
    margin: 20px 0px;
    font-size: 40px;
    font-weight: 100;
`
const Description = styled.p`
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    
`
const FilterTitle = styled.span`
    font-style: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0px 5px;
    cursor: pointer;
    background-color: ${props => props.color};
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    
`
const FilterOption = styled.option`
    
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={denimjumpsuit} />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Price>$20.99</Price>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta autem, expedita eveniet officia cumque aspernatur iste unde veritatis natus doloribus a modi possimus dolor odit laboriosam similique ut totam.</Description>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                            <FilterOption>XXL</FilterOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
            
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product