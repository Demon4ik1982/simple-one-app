import React, { FC } from 'react'
import "./KebabMenu.module.scss"
import Button from '../../ui/Button/Button'

export interface IKebabMenuProps {
  active: boolean;
  setKebab: React.Dispatch<React.SetStateAction<boolean>>;
}

const KebabMenu: FC<IKebabMenuProps> = ({ active, setKebab }) => {
  return (
    <div className={active ? "kebab-menu active" : "kebab-menu"}>
      <Button variant="primary" label="Сохранить" onClick={() => setKebab(false)}/>
      <Button variant="outline" label="Сохранить и выйти" onClick={() => setKebab(false)}/>
    </div>
  )
}

export default KebabMenu
