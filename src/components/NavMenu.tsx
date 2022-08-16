import Link from 'next/link'
import Logo from './Logo'
import Dropdown from './DropDown'
import SwitchMode from './SwitchMode'
import styled from 'styled-components'
import { MaxWidthWrapper } from './styled/maxWidthWrapper'
import { NavBar } from './styled/nav.styled'

export default function NavMenu({ path }: any) {
  return (
    <MaxWidthWrapper>
      <NavBar>
        <div className='container'>
          <div className='container_logo'>
            <Logo />
          </div>
          <div className='container_links'>
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

          <div className='container_switch'>
            <SwitchMode />
          </div>

          <div className='container_menu'>
            <Dropdown />
          </div>
        </div>
      </NavBar>
    </MaxWidthWrapper>
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
