import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92%;
  width: 250px;
  background-color: ${props => props.bgColor};
  top: 60px;
  position: fixed;
`
export const Navbar = styled.div`
  display: flex;
`
export const NavOptions = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: none;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-left: 20px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  padding: 10px;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactHeading = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-size: 10px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const NavigationSmallContainer = styled.div`
  display: flex;
  padding: 20px;
  height: 60px;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  position: fixed;
  align-items: center;
`
