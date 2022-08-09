import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { AppProps } from 'next/app' // ???
import styles from './nav.module.css'
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
          <p>
            <Link href="/projects">
              <a>My Projects</a>
            </Link>
          </p>
          <p>
            <Link href="https://github.com/zyrjanow">
              <a target="blank">GitHub</a>
            </Link>
          </p>
        </div>

        <div className={styles.HP__navbar_container_switch}>
          <SwitchMode />
        </div>

        <div className={styles.HP__navbar_container_menu}>
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
