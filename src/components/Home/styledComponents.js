import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background-color: none;
`

export const BannerImage = styled.img`
  height: 30px;
  width: 80px;
`

export const BannerText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #000000;
`
export const BannerCloseButton = styled.button`
  height: 25px;
  border: none;
`
export const SearchContainer = styled.div`
  height: 40px;
  width: 60%;
  margin: 20px;
  display: flex;
  border: 1px solid #909090;
  border-radius: 10px;
`
export const SearchIconContainer = styled.button`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  border: none;
`

export const SearchInput = styled.input`
  color: ${props => props.color};
  padding: 10px;
  width: 100%;
  font-family: 'Roboto';
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
