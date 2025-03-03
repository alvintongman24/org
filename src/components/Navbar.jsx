import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'






function Navbar() {

    const navigation = [
        { name: 'Home', icon:"fa-solid fa-house", href: '#', current: true }, 
        { name: 'Orgy World', icon:"fa-solid fa-earth-oceania", href: '#', current: false },
        { name: 'Search', icon:"fa-solid fa-magnifying-glass", href: '#', current: false },
        { name: 'MENU', icon:"fa-solid fa-bars", href: '#', current: false },
      ]

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


      


    return(

        <section className="px-100px ">

            <Disclosure as="nav" className="bg-black fixed top-0 left-0 w-full z-50 animate-slideDown">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden  ">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset ">
                      <span className="absolute -inset-0.5 " />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center md:justify-around sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                      <img
                        alt="Your Company"
                        src="https://theradishingreview.com/wp-content/uploads/2020/03/OnlineDatingRR.jpg"
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-10">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                          >
                             <i class={item.icon}></i>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="size-5 md:size-8" />
                    </button>
        
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src="https://th.bing.com/th/id/R.b0760ab4e3887509927a4b9cb2bf5503?rik=EwIZiasE27b5ng&pid=ImgRaw&r=0"
                            className=" size-6 md:size-8 rounded-full"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            Your Profile
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            Settings
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            Sign out
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
              </div>
        
              <DisclosurePanel className="sm:hidden ">
                <div className="space-y-1 pt-2 pb-3 overflow-x-hidden">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>

            </section>
          )
        }
        


export default Navbar;