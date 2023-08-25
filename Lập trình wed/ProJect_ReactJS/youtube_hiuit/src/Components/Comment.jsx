import React from 'react'
import { styled } from 'styled-components'
import VinhHaLong from '../img/Vịnh Hạ Long.jpg'
import Comments from './Comments'


const Container = styled.div`
    height: 80px;
    width: 95%;
    margin: auto;
    `
const WrapperChannel = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom: 50px;
   /* background-color: #ccc; */
`
const DisPlayComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LogoChannel = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`
const TitleChannel = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-weight: 500px;
  color: ${({ theme }) => theme.colorText};
  margin-left: 10px;
  text-transform: uppercase;
`
const SaveDisPlayComment = styled.div`
  display: flex;
`
const SaveSubriChannel = styled.div`
  
`
const ViewChannel = styled.div`
  text-transform: lowercase;
  color: ${({ theme }) => theme.colorText};
  font-size: 13px;
  font-weight: normal;

`
const ButtonSubChannel = styled.button`
  background-color: red;
  cursor: pointer;
  width: 110px;
  border-radius: 3px;
  height: max-content;
  padding: 5px;
  color: ${({ theme }) => theme.colorText};
  border: none;
`
const ChannelComment = styled.div`
  width: 90%;
  margin-left: 59px;
  font-size: 15px;
  text-align: justify;
  margin-top: 5px;
`
const AddComment = styled.input`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
`
const ImgChannel = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  object-fit: cover;
  `
function Comment() {
  return (
    <Container>
      <WrapperChannel>
        <DisPlayComment>
          <SaveDisPlayComment>
            <LogoChannel src={VinhHaLong}></LogoChannel>
            <TitleChannel>HiuIT <ViewChannel>1tr lượt đăng ký</ViewChannel> </TitleChannel>

          </SaveDisPlayComment>
          <SaveSubriChannel>
            <ButtonSubChannel>Đăng Ký</ButtonSubChannel>
          </SaveSubriChannel>
        </DisPlayComment>
        <ChannelComment>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium, libero dicta voluptas dolor possimus dolores error fugiat tenetur blanditiis quam, omnis illo, eligendi nulla natus delectus! Quae, voluptatibus recusandae!
        </ChannelComment>
            <Wrapper>
        <ImgChannel src={VinhHaLong} />
        <AddComment placeholder='Thêm bình luận...'></AddComment>
        
      </Wrapper>
      
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      </WrapperChannel>
  


    </Container>
  )
}

export default Comment
