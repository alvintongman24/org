import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'






function Navbar() {

    const navigation = [
        { name: 'LogIn', icon:"fa-solid fa-house", href: '#', current: true,className:"bg-green-200" }, 
        { name: 'SignUp', icon:"fa-solid fa-earth-oceania", href: '#', current: false , },
        { facebook:"https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000"},
         {icons:"https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"},
         {X:"https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"}

        
      ]

     

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


      


    return(

        <section className="">

            <Disclosure as="nav" className="bg-black fixed top-0 left-0 w-full z-50 animate-slideDown py-8 shadow-2xl  ">
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
                  <div className="flex flex-1 items-center justify-center md:justify-between sm:items-stretch sm:justify-start">
                    <div className="">
                      <img
                        alt="Your Company"
                        src="https://media-hosting.imagekit.io//9a3862b29e7448d6/orgymeet-logo-2.png?Expires=1837254583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L6-AO2IyLeVz7oP5dtLlPplGTsFB6YyY3KDrtXLjcgU2-6eqQ0KL0cjZmTnvs0A2BtMHV3ff95Fbvoy~p31IZxB-vfr~Q7ixD2ZQnT7r28aFbtzX~iSfOIfYtfGNrjzFDpFNH-H-SOC6JOMbIDkDnRNC6gBCdG6Zd3~MoFdIazeo2V1EOqPYGMdU9V8JehAUnRE0SlbelA8ICnWPlIByx3~Du7NSG-3PWjdrWbnuVH5WmOvImz6zjc6O6HudpBoi1gAw2JENkoKA6qu~I5KY1uAO~fMsLQJP3jyIMSZQddzNy66Xrm8Ah5xDrS-ZOfuv2wz0XhOlKm6YE-Fgw2G9Ww__"
                        className="h-30 md:h-50 w-auto"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block ">
                    
                      <div className="flex space-x-10 p-20">
                        {navigation.map((item) => (
                          <div  key={item.name}>
                          <a
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                             item.current ? 'bg-[#90EE98] text-black' : 'text-gray-300 hover:bg-[#90EE98] hover:text-black',
                              'rounded-md px-3 py-2 text-xl semi-bold md:py-3 px-1 ',
                            )}
                          >
                             <i class={item.icon}></i>
                            {item.name}
                          </a>
                           
                            
                          </div>


                        ))}
                      </div>



                    </div>


                    <div className="flex items-center space-x-2 md:space-x-8 ">
                           <div>
                                 <img src="https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000" className="w-5 md:w-12 h-5 md:h-12 hover:opacity-75 cursor-pointer"/>
                           </div>
                           <div>
                                <img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" className="w-5 md:w-12 h-5 md:h-12 hover:opacity-75 cursor-pointer"/>
                            </div>
                            <div>
                                <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=ffffff" className="w-5 md:w-12 h-5 md:h-12 hover:opacity-75 cursor-pointer"/>
                            </div>
                    </div>

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
                      item.current ? 'bg-[#90EE98] text-white' : 'text-gray-300 hover:bg-[#90EE99] hover:text-white',
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





