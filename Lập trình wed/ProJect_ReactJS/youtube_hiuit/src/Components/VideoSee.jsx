import React from 'react'
import { styled } from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import Comment from './Comment';
import Card from './Card';
const Container = styled.div`

`
const Content = styled.div`
    display: flex;
    overflow-y:scroll;

`
const ContentVideo = styled.div`
    flex: 5;
`
const SliderVideo = styled.div`
    height: 100%;
    margin-top: 20px;
    flex: 2;
`
const VideoYTB = styled.div`
    width: 95%;
    height: 65vh;
    margin: 20px auto;
    background-color: #ccc;
`
const TitleVideo = styled.div`
    font-size: 16;
    font-weight: 500px;
    width: 95%;
    height: 90px;;
    /* background-color: #ccc; */
    margin: 1px auto;
`
const ChannelVideo = styled.div`
    display: flex;
    justify-content: space-between;
`
const NameVideo = styled.h5`
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorText};
`
const ViewVideo = styled.div`
    color: ${({ theme }) => theme.colorText};
    font-size: 12px;
`
const DateVideo = styled.span`
    margin: 0px 5px;
`
const WrapperChannel = styled.div`
        display: flex;
        gap: 5px;
`
const ButtonVideo = styled.button`
    font-size: 15px;
    display: flex;  
    gap: 5px;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colorText};
    background-color: transparent;
`
const HR = styled.hr`
    border: 0.8px solid #8a8383;
`
function VideoSee() {
    return (
        <Container>
            <Content>
                <ContentVideo>
                    <VideoYTB><iframe width="100%" height="100%" src="https://www.youtube.com/embed/yIaXoop8gl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></VideoYTB>
                    <TitleVideo>
                        <NameVideo>Sẽ Gầy China</NameVideo>
                        <ChannelVideo>
                            <ViewVideo>700.000 View<DateVideo>10 Ngày trước</DateVideo></ViewVideo>
                            < WrapperChannel>
                                <ButtonVideo> <ThumbUpIcon />Like</ButtonVideo>
                                <ButtonVideo> <ThumbDownAltIcon />DistLike</ButtonVideo>
                                <ButtonVideo> <ShareIcon />Share</ButtonVideo>
                                <ButtonVideo> <SaveIcon />Save</ButtonVideo>
                            </WrapperChannel>
                        </ChannelVideo> 
                         < HR />
                    </TitleVideo>  
                      {/*  Phần Bình luận */}
                      <Comment/>
                </ContentVideo>
                <SliderVideo>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                    <Card type="sm"/>
                </SliderVideo>
            </Content>
        </Container>
    )
}

export default VideoSee
