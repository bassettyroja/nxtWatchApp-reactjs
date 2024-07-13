import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  min-height: 92vh;
  overflow-y: auto;
`
export const NotFoundVideosViews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`

export const NotFoundVideosHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
`
export const NotFoundVideos = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${props => props.noteColor};
  font-family: 'Roboto';
`
export const NotFoundVideosNote = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`
