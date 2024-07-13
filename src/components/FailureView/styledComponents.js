import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

export const FailedImage = styled.img`
  width: 200px;
`

export const FailedHeading = styled.h1`
font-size:25px;
font-family:"roboto";
color:${props => props.headingColor}
text-align:center;
`

export const FailedNote = styled.p`
font-size:18px;
font-family:"Roboto";
color:${props => props.noteColor}
text-align:center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 15px;
  border-style: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
