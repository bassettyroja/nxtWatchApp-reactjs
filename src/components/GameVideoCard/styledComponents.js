import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const GamingThumbnailImage = styled.img`
  height: 300px;
  width: 100vw;
  align-self: center;
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const GamingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
