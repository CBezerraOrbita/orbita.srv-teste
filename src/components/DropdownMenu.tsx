import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'
import ActiveLink from './ActiveLink'

interface LinkProps {
  name: string
  href: string
}

interface DropdownMenuProps {
  name: string
  options: LinkProps[]
}

const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left text-green-900">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md font-display text-base hover:bg-opacity-30 focus:outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {props.name}
          <CaretDown
            className="ml-1 -mr-1 h-5 w-5 text-green-900 hover:text-accent"
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
        <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {props.options.map((item) => {
              return (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-accentDark text-white' : 'text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <ActiveLink href={item.href} name={item.name} />
                    </button>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu
