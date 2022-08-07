import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import Logo from '@components/Logo'
import { AppProps } from 'next/app' // ???
import styles from './nav.module.css'

const LinkItem = ({ href, target, children, ...props }: any) => {
  return (
    <Menu.Item>
      <Link href={href} className="block px-4 py-2 text-sm" {...props}>
        {children}
      </Link>
    </Menu.Item>
  )
}

export default function NavMenu({ path }: any) {
  return (
    <nav className={styles.HP__navbar}>
      <div className={styles.HP__navbar-links}>
        <div className={styles.HP__navbar-links_logo}>
          <Logo />
        </div>

        <div className="HP__navbar-links_container">
          <p>
            <Link href="/">Home</Link>
          </p>
          <p>
            <Link href="/myprojs">My Projects</Link>
          </p>
          <p>
            <a href="https://github.com/zyrjanow" target="_blank">
              My GitHub
            </a>
          </p>
        </div>

        <div className="HP__navbar-links_dropdown">
          <Menu as="div" className="h-7 relative inline-block text-left">
            <div className="h-5 my-1">
              <Menu.Button className="inline-flex justify-center">
                {/* <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="origin-top-right w-24 absolute right-0
                mt-2
                bg-white ring-2 ring-gray-400/20 ring-opacity-5
                focus:outline-none"
              >
                <div className="py-1">
                  <LinkItem target="_self" href="/">
                    Home
                  </LinkItem>
                  <LinkItem target="_self" href="/projs">
                    Projects
                  </LinkItem>
                  <LinkItem target="_blank" href="https://github.com/zyrjanow">
                    GitHub
                  </LinkItem>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
