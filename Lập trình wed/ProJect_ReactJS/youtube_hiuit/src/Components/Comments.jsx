import React from 'react'
import { styled } from 'styled-components'
import VinhHaLong from '../img/Vịnh Hạ Long.jpg'


const Container = styled.div`
     
`
const WrapperComment = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
    background: ${({theme}) => theme.bg};

`
const ImgChannel = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  object-fit: cover;
  `
  const TitleComment = styled.div`
    font-size: 16px;
    display: flex;
  `
  
  const TitleChannel = styled.div`
    font-size: 16px;
    display: inline-flex;
    gap: 10px;
  color: ${({ theme }) => theme.colorText};
  `
  const DateChannel = styled.div`
    font-size: 13px;
  `
  
  const CommentNewChannel = styled.div``
  const ContentCommentVideo = styled.div``
// const Container = styled.div``
function Comments() {
    return (
        <Container>
            <WrapperComment>
                <ImgChannel src={VinhHaLong} />
                <ContentCommentVideo>
                    <TitleComment>
                        <TitleChannel>HIUIT <DateChannel>1 giờ trước</DateChannel></TitleChannel>
                    </TitleComment>

                    <CommentNewChannel>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium repellendus asperiores quaerat recusandae fugiat.
                    </CommentNewChannel>
                </ContentCommentVideo>
            </WrapperComment>
        </Container>
    )
}

export default Comments
