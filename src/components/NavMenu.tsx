import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { AppProps } from 'next/app' // ???
import styles from './nav.module.css'
import styled from '@emotion/styled'
import Logo from './Logo'
import Dropdown from './DropDown'
import SwitchMode from './SwitchMode'

export default function NavMenu({ path }: any) {
  return (
    <nav className={styles.HP__navbar}>
      <div className={styles.HP__navbar_container}>
        <div className={styles.HP__navbar_container_logo}>
          <Logo />
        </div>
        <div className={styles.HP__navbar_container_links}>
          <div className={styles.HP__navbar_container_links_container}>
            <p>
              <Link href="/projects">My Projects</Link>
            </p>
            <p>
              <a href="https://github.com/zyrjanow" target="_blank">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div className={styles.HP__navbar_container_menu}>
          <SwitchMode />
          <Dropdown />
        </div>
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
