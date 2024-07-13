import styled from 'styled-components'

export const LoaderContainer = styled.div`
  width: 100%;
`

export const TrendingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingText = styled.h1`
  font-family: 'Robot';
  font-size: 25px;
  color: ${props => props.color};
`
