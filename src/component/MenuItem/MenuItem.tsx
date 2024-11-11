import React from 'react'
import "./MenuItem.module.scss"

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
}


const MenuItem: React.FC<MenuItemProps> = ({ label, icon }) => {
  return (
    <li className='menu-item'>
      <span className='menu-item__icon'>{icon}</span><span className='menu-item__discr'>{label}</span>
    </li>
  )
}

export default MenuItem
