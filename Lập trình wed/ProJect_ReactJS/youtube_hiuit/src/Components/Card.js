import React from 'react'
import { styled } from 'styled-components'
import VinhHaLong from '../img/Vịnh Hạ Long.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 5px;
`
const StyledCard = styled.div`
    height: ${(props) => props.type === "sm"? "110px":"220px"};
    width: ${(props) => props.type === "sm"?"220px":"280px"};
    background-color: #ccc;
`
const CardImage = styled.img`
    width: 100%;
    height: 100%;
`
const CardTextChannel = styled.div`
    height: 130px;
    width: 290px;
    /* background-color: #ccc; */
    margin-top: ${(props) => props.type === "sm"?"0px":"10px" };
    display: flex;
    gap: 20px;
`
const ChannelImg = styled.img`
    width: ${(props) => props.type === "sm" && "0px"};  
    height: 35px;
    border-radius: 90%;
    background: ${({theme}) => theme.bg};
`
const ChanneBlog = styled.div`
    width: 100%;
    height: 100px;
    /* background-color: #ccc; */
`
const BlogTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.colorText};
    text-transform: uppercase;
`
const BlogChannel = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.colorText};
`
const BlogView = styled.h1`
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
`
function Card({type}) {
  return (
    <Container>
      <Wrapper  type={type} >
        <StyledCard type={type}>
            <CardImage  src={VinhHaLong} />
        </StyledCard>
            <CardTextChannel type={type} >
                <ChannelImg type={type} src={VinhHaLong}/>
                <ChanneBlog>
                    <BlogTitle><Link to='/video' style={{textDecoration: "none", color: "currentcolor"}}>Sẽ Gầy China</Link></BlogTitle>
                    <BlogChannel>HiuIT</BlogChannel>
                    <BlogView>1 triệu views 1.Day</BlogView>
                </ChanneBlog>
            </CardTextChannel>
      </Wrapper>
    </Container>
  )
}

export default Card
