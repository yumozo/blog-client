import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

function MenuItem({ children }: any) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${active ? 'bg-white text-gray-900' : 'text-white'}
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
        <Menu.Button
          className="inline-flex w-full justify-center rounded-md
            bg-black bg-opacity-20 p-2
            text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <MenuIcon
            className="h-5 w-5 text-gray-200 hover:text-white"
            aria-hidden="true"
          />
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
          className="absolute right-0 mt-2 w-24
          origin-top-right divide-y divide-gray-200 rounded-md
          bg-[#121212] shadow-lg
          ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="px-1 py-1 ">
            <MenuItem>Home</MenuItem>
            <MenuItem>Projects</MenuItem>
          </div>
          <div className="px-1 py-1">
            <MenuItem>GitHub</MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
