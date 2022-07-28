import styled from "styled-components";

export const VideoWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
padding:0;
margin:0;
left: 0px;
top: 0px;
z-index: -1000;
overflow:hidden;
`

export const BackgroundVideo = styled.video`
min-height: 100%;
position:absolute;
bottom:0;
left:0;
`

export const VideoSrc = styled.source`
min-height: 100%;
position:absolute;
bottom:0;
left:0;
`