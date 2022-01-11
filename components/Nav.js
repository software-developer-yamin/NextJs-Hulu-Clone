import React from 'react';
import requests from '../utils/requests';
import {useRouter} from 'next/router'

function Nav() {
     const router = useRouter();
     return (
          <nav className="relative">
               <div className='flex px-10 pb-2 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide'>
                    {Object.entries(requests).map(([key, {title,url}]) => (
                         <h2 key={key} onClick={() => router.push(`/?genre=${url}`)} className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                    ))}
               </div>
               <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
          </nav>
     )
}

export default Nav;
