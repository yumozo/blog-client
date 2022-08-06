import React from 'react'
import DropDown from './DropDown'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import logo from 'assets/logo192.png'
import './navmenu.css'

export default function NavMenu() {
  return (
    <nav className="HP__navbar">
      <div className="HP__navbar-links">
        <div className="HP__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="HP__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/myprojs">My Projects</Link>
          </p>
          <p>
            <a href="https://github.com/zyrjanow" target="blank">
              My GitHub
            </a>
          </p>
        </div>
        <DropDown />
      </div>
    </nav>
  )
}

// export default function NavMenu() {
//   return (
//     <nav className="flex flex-wrap
//       items-center justify-between
//       py-4"
//     >

//       <Link to='/'
//         className="mr-8"
//       >
//         Logo
//       </Link>

//       <div className='pr-8'>
//         <Link to='projs'>
//           projects
//         </Link>
//         <a href='https://github.com/zyrjanow' target="_blank">
//           source
//         </a>
//       </div>

//       <div className="ml-8">
//         <span>dark/light mode</span>
//       </div>

//     </nav>
//   )
// }
