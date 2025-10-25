import { Projector, User, UserPen } from 'lucide-react'
import React from 'react'



const links = [
    {
    name: 'profile',
    link: '#',
    logo: <UserPen />
    },
    {
    name: 'users',
    link: '#',
    logo: <User/>
    },
    {
    name: 'project',
    link: '#',
    logo: <Projector/>
    },
]

const SideBar = () => {
  return (
    <aside className='fixed left-0 top-0 h-screen w-64 bg-indigo-300 text-white flex flex-col justify-evenly items-center p-6 -z-1 '>
        <h2>My App</h2>
        {links.map((link) => {
            return <nav className='p-5'  key={link.name}>
                <a className='flex flex-row gap-3' href={link.link}>
                    {link.logo}
                    <span>{link.name}</span>
                </a>
            </nav>
        })}
        
    </aside>
  )
}

export default SideBar