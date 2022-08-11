import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fdfb;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
`
const Image = styled.img`
    height: 75%;
`

const Icon = styled.div`
    background-color: white;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        // background-color: red;
        // color: white;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon><ShoppingCartOutlined /></Icon>
            <Icon><SearchOutlined /></Icon>
            <Icon><FavoriteBorderOutlined /></Icon>
        </Info>
    </Container>
  )
}

export default Product