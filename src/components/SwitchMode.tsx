import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'

function changeTheme(enabled: Boolean) {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  if (enabled) {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'
  } else {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
  }
  // Whenever the user explicitly chooses to respect the OS preference
  //localStorage.removeItem('theme')
}

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="
          relative inline-flex h-[28px] shrink-0
          cursor-pointer
          rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Switch theme</span>
        <span
          aria-hidden="true"
          className={`${enabled
            ? 'text-gray-800 bg-[#fcfcfc]'
            : 'text-white bg-[#121212]'
            }
            pointer-events-none inline-block h-[28px] w-[28px]
            rounded-md shadow-lg ring-0
            transition duration-200 ease-in-out`}
        >
          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="-2 -2 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="-2 -2 24 24"
              stroke="currentColor"
              strokeWidth={0}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </span>
      </Switch>
    </>
  )
}
