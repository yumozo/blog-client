import Link from 'next/link'
import Image from 'next/image'
import Dropdown from './dropdown'
import ThemeSwitch from './theme-switch'
import styled from 'styled-components'
import LinkWithLogo from './link-with-logo'
import useUser from 'lib/useUser'

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  max-width: 686px;

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

  .dropdown-wrapper {
    display: none;
  }

  @media (max-width: 563px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 800px) {
    .dropdown-wrapper {
      display: flex;
    }
  }
`

const StyledNavMenu = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  user-select: none;
`

const LinksWrapper = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: flex-start;

  p {
    margin-right: 2em;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

const LogoWrapper = styled.span`
  display: inline-flex;
  align-items: end;
  margin-right: 3em;
  gap: 0.25rem;

  font-weight: 600;
  /* color: #fff; */
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export default function NavMenu() {
  const { user } = useUser({ redirectTo: '/login' })

  return (
    <StyledNavMenu>
      <NavBar>
        <Link href="/">
          <a>
            <LogoWrapper>BlogProj</LogoWrapper>
          </a>
        </Link>

        <LinksWrapper className="links-wrapper">
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/new">
              <a>Create Post</a>
            </Link>
          </p>
          <p>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </p>
          {!user?.isLoggedIn &&
            <>
              <p>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </p>
              <p>
                <Link href="/login">
                  <a>Log in</a>
                </Link>
              </p>
            </>
          }
          {user?.isLoggedIn &&
            <p>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </p>
          }
        </LinksWrapper>

        <ThemeSwitch />

        <div className="dropdown-wrapper">
          <Dropdown />
        </div>
      </NavBar>
    </StyledNavMenu>
  )
}
