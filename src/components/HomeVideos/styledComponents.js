import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideosImage = styled.img`
  width: 200px;
`
export const NoVideosHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 13px;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
