import React from 'react'
import Button from '../../ui/Button/Button'
import { ReactComponent as Sidebar } from "../../asset/image/sidebar.svg";
import { ReactComponent as Star } from "../../asset/image/star.svg";
import "./SideMenu.module.scss"

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <Button variant='onlyIcon' icon={<Sidebar />}/>
      <Button variant='onlyIcon' icon={<Star />}/>
    </div>
  )
}

export default SideMenu
