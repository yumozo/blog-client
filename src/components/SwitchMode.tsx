import { useEffect, useState } from 'react'

const ThemeSvgIcon = ({ strokeWidth, fill, children }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 m-auto"
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      {children}
    </svg>
  )
}

export default function SwitchMode() {
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
    <div className="">
      <form action="#">
        <label className="switch flex h-auto cursor-pointer">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={darkTheme as undefined | boolean}
            id="switch-theme"
            className="relative hidden h-[28px] shrink-0
            rounded-full border-2 border-transparent
            transition-colors duration-200 ease-in-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          />
          <span
            aria-hidden="true"
            className={`${
              darkTheme
                ? 'text-gray-800 bg-[#fcfcfc]'
                : 'text-white bg-[#121212]'
            }
            pointer-events-none flex h-[36px] w-[28px]
            rounded-md shadow-lg ring-0
            transition duration-200 ease-in-out`}
          >
            {darkTheme ? (
              <ThemeSvgIcon strokeWidth={2} fill={'none'}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </ThemeSvgIcon>
            ) : (
              <ThemeSvgIcon strokeWidth={0} fill={'currentColor'}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </ThemeSvgIcon>
            )}
          </span>
        </label>
      </form>
    </div>
  )
}
