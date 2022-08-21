import Link from 'next/link'
import Image from 'next/image'
import Dropdown from './dropdown'
import ThemeSwitch from './theme-switch'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1000px;

  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-inline-start: auto;
  margin-inline-end: auto;

  backdrop-filter: blur(5px);
  align-items: center;
  padding: 14px 16px;

  & > * {
    max-height: 36px;
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
  }

  .links-wrapper {
    position: relative;
    display: flex;
    margin-left: 1rem;
  }

  .dropdown-wrapper {
    display: none;
  }

  @media (max-width: 563px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 800px) {
    .links-wrapper {
      display: none;
    }

    .dropdown-wrapper {
      display: flex;
    }
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

const LogoWrapper = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 4px;
    font-weight: 600;
    color: var(--secondary);
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

const StyledSwitch = styled(ThemeSwitch)`
  margin-left: auto;
`

export default function NavMenu() {
  return (
    <StyledNavMenu>
      <NavBar>
        <Link href="/">
          <a>
            <LogoWrapper>
              <Image
                className="cursor-pointer"
                src="/logo192.png"
                width={32}
                height={32}
                alt="logo"
              />
              <p>Zyrjanow</p>
            </LogoWrapper>
          </a>
        </Link>

        <LinksWrapper className="links-wrapper">
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

        <StyledSwitch />

        <div className="dropdown-wrapper">
          <Dropdown />
        </div>

      </NavBar>
    </StyledNavMenu>
  )
}
