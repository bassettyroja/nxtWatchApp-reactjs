import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const TrendingThumbnailImage = styled.img`
  height: 300px;
  width: 100vw;
  align-self: center;
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const TrendingTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const TrendingProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`
