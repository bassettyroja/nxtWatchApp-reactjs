import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.spam`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const ViewsAndDate = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
