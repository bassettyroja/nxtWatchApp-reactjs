import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 25px;
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PlayVideoStatus = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const PlayVideoDot = styled.span`
  height: 25px;
  width: 25px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 50%;
`
export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2563eb;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  color: #2563eb;
  margin-left: 10px;
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelDescription = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ChannelSubscribers = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
