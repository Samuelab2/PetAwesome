import React from 'react'
import { Nav, Link } from './styles'
import { TiHome, TiStarFullOutline, TiUser} from 'react-icons/ti'

const SIZE = '30px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><TiHome size={SIZE}/></Link>
      <Link to='/favs'><TiStarFullOutline size={SIZE} /></Link>
      <Link to='/user'><TiUser size={SIZE} /></Link>
    </Nav>
  )
}