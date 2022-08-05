import React from "react";
import DropDown from './DropDown'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <nav className="flex flex-wrap
      items-center justify-between
      py-4"
    >

      <Link to='/'
        className="mr-8"
      >
        Logo
      </Link>

      <div className='pr-8'>
        <Link to='projs'>
          projects
        </Link>
        <a href='https://github.com/zyrjanow' target="_blank">
          source
        </a>
      </div>

      <div className="ml-8">
        <span>dark/light mode</span>
        <DropDown />
      </div>

    </nav>
  )
}