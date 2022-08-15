import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import styled from 'styled-components'

const Button = styled.button`
  color: var(--color-text);
  &:hover {
    color: var(--color-text);
  }
`

const StyledMenu = styled(Menu)`
  position: relative;
  display: inline-block;
  text-align: left;
`

const StyledMenuItems = styled(Menu.Items)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 6rem;
  transform-origin: top right;
  border-radius: 0.375rem;
  background-color: var(--color-surface);
`
  {/* focus:outline-none" */}

const StyledMenuButton = styled(Menu.Button)`
  padding: 0.5rem;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  background-color: #00000033;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #0000004d;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`

function MenuItem({ children, href }: any) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${active ? 'bg-[#ffffff33]' : ''}
            group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  )
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <StyledMenuButton>
          <svg
            className="h-5 w-5 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </StyledMenuButton>
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
        <StyledMenuItems>
          <div className="px-1 py-1 ">
            <MenuItem>Home</MenuItem>
            <MenuItem>Projects</MenuItem>
          </div>
          <div className="px-1 py-1">
            <MenuItem>GitHub</MenuItem>
          </div>
        </StyledMenuItems>
      </Transition>
    </Menu>
  )
}
