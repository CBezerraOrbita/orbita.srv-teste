import React from 'react'

import ActiveLink from './ActiveLink'
import { navigation } from '../data/content'
// import DropdownMenu from './DropdownMenu'

// services, blog, client

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-base font-display">
        {navigation.map((item) => {
          return (
            <li
              className="text-baseGray400 hover:to-text-green-900 cursor-pointer"
              key={item.name}
            >
              <ActiveLink href={item.href} name={item.name} />
            </li>
          )
        })}
        {/* <li className="text-baseGray400 font-medium hover:text-baseWhite cursor-pointer">
          <DropdownMenu name={services.name} options={services.options} />
        </li>
        <li className="text-baseGray400 font-medium hover:text-baseWhite cursor-pointer">
          <DropdownMenu name={client.name} options={client.options} />
        </li> */}
        {/* <li className="cursor-pointer">
          <ActiveLink href={blog.href} name={blog.name} />
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
