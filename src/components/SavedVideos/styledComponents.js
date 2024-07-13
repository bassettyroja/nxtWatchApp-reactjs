import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`

export const SavedVideoTitle = styled.div`
  display: flex;
  justify-content: center;
`
export const SavedTitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedText = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const NoSavedVideoViews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideoImage = styled.img`
  width: 200px;
`
export const NoSavedVideoHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  text-align: center;
`
export const NoSavedVideoNote = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`
