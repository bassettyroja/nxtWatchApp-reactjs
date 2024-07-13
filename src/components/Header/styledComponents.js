import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 80px;
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  border: none;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  background-color: #cbd5e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  padding: 10px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  padding: 8px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  border-radius: 8px;
  font-size: 12px;
  outline: none;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  padding-left: 12px;
  padding-right: 12px;
  font-family: 'Roboto';
  color: white;
  padding: 8px;
  margin: 10px;
  font-weight: bold;

  outline: none;
  cursor: pointer;
  border: 1px solid #3b82f6;
`

export const ModalDesc = styled.p`
  font-size: 15px;
  text-align: center;
  font-family: 'Roboto';
  color: black;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
