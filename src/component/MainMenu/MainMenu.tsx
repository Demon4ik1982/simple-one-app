import React from 'react'
import FormField from '../FormField/FormField'
import { ReactComponent as Filter } from "../../asset/image/filter.svg";
import { ReactComponent as Pin } from "../../asset/image/pin.svg";
import { ReactComponent as ArrowMenu } from "../../asset/image/arrow_menu.svg";
import Button from '../../ui/Button/Button';
import MenuItem from '../MenuItem/MenuItem';
import "./MainMenu.module.scss"

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <div className='main-menu__search'>
      <FormField placeholder="Поиск по меню" icon={<Filter />} />
      <Button variant="menu" icon={<Pin />} />
      </div>
      <ul className='main-menu__list'>
      <MenuItem label='Моя работа' icon={<ArrowMenu />} />
      <MenuItem label='Структура портала' icon={<ArrowMenu />} />
      <MenuItem label='Личное расписание' icon={<ArrowMenu />} />
      <MenuItem label='Отсутствие на рабочем месте' icon={<ArrowMenu />} />
      <MenuItem label='Портфель услуг' icon={<ArrowMenu />} />
      <MenuItem label='Дашборды' icon={<ArrowMenu />} />
      <MenuItem label='Доски задач' icon={<ArrowMenu />} />
      <MenuItem label='Обращения' icon={<ArrowMenu />} />
      <MenuItem label='События' icon={<ArrowMenu />} />
      <MenuItem label='Инциденты' icon={<ArrowMenu />} />
      <MenuItem label='Проблемы' icon={<ArrowMenu />} />
      <MenuItem label='Настройка каталогов' icon={<ArrowMenu />} />
      <MenuItem label='Запросы на обслуживание' icon={<ArrowMenu />} />
      <MenuItem label='Запросы на изменение' icon={<ArrowMenu />} />
      <MenuItem label='Управление конфигурациями' icon={<ArrowMenu />} />
      <MenuItem label='Управление уровнем услуг' icon={<ArrowMenu />} />
      <MenuItem label='Настройка соответствий' icon={<ArrowMenu />} />
      </ul>
    </div>
  )
}

export default MainMenu
