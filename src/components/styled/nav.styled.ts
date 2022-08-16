import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;

  .container {
    max-width: 750;
    width: 100%;
    margin-inline-start: auto;
    margin-inline-end: auto;
    display: inherit;
    justify-content: inherit;
  }

  .container_logo {
    margin-right: 2rem;
  }

  .container_logo img {
    width: 32px;
    height: 32px;
  }

  .container_links {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

  .container_switch {
    margin-left: auto;
  }

  .container_menu {
    position: relative;
    display: none;
    margin-left: 1rem;
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
