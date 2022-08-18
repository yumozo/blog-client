import Link from 'next/link'
import Logo from './logo'
import Dropdown from './dropdown'
import ThemeSwitch from './theme-switch'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: flex;
  backdrop-filter: blur(10px);
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;


  .container_logo {
    margin-right: 2rem;
  }

  .container_logo img {
    width: 32px;
    height: 32px;
  }

  .container_links p,
  .container_menu p {
    color: var(--color-text);
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  .container_menu_containter {
    border-right-width: 4px;
    margin-top: 1rem;
    right: 0;
    top: 2.5rem;
    position: absolute;
    padding: 2rem;
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    min-width: 210px;
    background: var(--color-footer);
  }

  @media screen and (max-width: 800px) {
    .container_links {
      display: none;
    }

    .container_menu {
      display: flex;
    }
  }
`

const Container = styled.div`
  max-width: 750;
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  display: inherit;
  justify-content: inherit;

  & > * {
    max-height: 36px;
  }
`

const StyledNavMenu = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
`

const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default function NavMenu({ path }: any) {
  return (
    <StyledNavMenu>
      <NavBar>
        <Container>

          <Logo />

          <LinksWrapper>
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
          </LinksWrapper>

          <ThemeSwitch />
          <Dropdown />

        </Container>
      </NavBar>
    </StyledNavMenu>
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
