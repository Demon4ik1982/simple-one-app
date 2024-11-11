import React, { FC } from 'react'
import { ReactComponent as ClosePerson } from "../../asset/image/close_person.svg";
import "./Person.module.scss"

export interface IPersonProps {
  label: string
  close: boolean;
}

const Person: FC<IPersonProps> = ({ label, close }) => {
  return (
    <div className='person'>
      <div className='person__descr'>{label}</div>
      {close ? <ClosePerson /> : <></>}
      </div>
  )
}

export default Person
