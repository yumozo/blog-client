import Link from 'next/link'
import Image from 'next/image'
import Dropdown from './dropdown'
import ThemeSwitch from './theme-switch'
import styled from 'styled-components'
import LinkWithLogo from './link-with-logo'

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
  align-items: center;
  
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

  p {
    font-weight: 600;
    color: var(--secondary);
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export default function NavMenu() {
  return (
    <StyledNavMenu>
      <NavBar>
        <Link href="/">
          <a>
            <LogoWrapper>
              <Image
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
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </p>
          <p>
            <Link href="/projects">
              <a>My Projects</a>
            </Link>
          </p>
          <p>
            <Link href="https://github.com/zyrjanow/my-blog">
              <a target="blank">
                <LinkWithLogo>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                  </svg>
                  Source
                </LinkWithLogo>
              </a>
            </Link>
          </p>
        </LinksWrapper>

        <ThemeSwitch />

        <div className="dropdown-wrapper">
          <Dropdown />
        </div>
      </NavBar>
    </StyledNavMenu>
  )
}
