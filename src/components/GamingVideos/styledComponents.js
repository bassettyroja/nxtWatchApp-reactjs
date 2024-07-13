import styled from 'styled-components'

export const LoadingViewContainer = styled.div`
  width: 100%;
`

export const GamingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingText = styled.h1`
  font-family: 'Robot';
  font-size: 25px;
  color: ${props => props.color};
`
