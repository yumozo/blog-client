import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SwitchWrapper = styled.div`
  margin-left: auto;

  label {
    cursor: pointer;
  }

  input {
    position: relative;
    display: none;
    height: 28px;
    flex-shrink: 0;
    border-radius: 999px;
    border-width: 2px;
    border-color: transparent;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
`

const StyledSwitchIcon = styled(SwitchIcon)`
  height: 24px;
  width: 24px;
  margin: auto;
`

const SwitchSvg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
`

type PropType = {
  darkTheme?: boolean
}

const SwitchButton = styled.span<PropType>`
  color: ${props => (props.darkTheme ? 'rgb(31 41 55 / 1)' : 'white')};
  background-color: ${props => (props.darkTheme ? '#fcfcfc' : '#121212')};

  display: flex;
  pointer-events: none;
  height: 36px;
  width: 28px;
  border-radius: 0.375rem;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`

function SwitchIcon({ strokeWidth, fill, children }: any) {
  return (
    <SwitchSvg fill={fill} stroke="currentColor" strokeWidth={strokeWidth}>
      {children}
    </SwitchSvg>
  )
}

export default function ThemeSwitch() {
  const [darkTheme, setDarkTheme] = useState(undefined as undefined | boolean)

  const handleToggle = (e: any) => {
    setDarkTheme(e.target.checked)
  }

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        window.localStorage.setItem('theme', 'light')
      }
    } else {
      const theme = window.localStorage.getItem('theme')
      if (theme === 'dark') {
        setDarkTheme(true)
      }
    }
  }, [darkTheme])

  return (
    <SwitchWrapper>
      <form action="#">
        <label className="switch flex h-auto">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={darkTheme as undefined | boolean}
            id="switch-theme"
          />
          <SwitchButton aria-hidden="true" darkTheme={darkTheme}>
            {darkTheme ? (
              <StyledSwitchIcon strokeWidth={2} fill={'none'}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </StyledSwitchIcon>
            ) : (
              <SwitchIcon strokeWidth={0} fill={'currentColor'}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </SwitchIcon>
            )}
          </SwitchButton>
        </label>
      </form>
    </SwitchWrapper>
  )
}
