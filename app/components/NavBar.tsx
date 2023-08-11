'use client'
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'
import Link from 'next/link';
const NavBar = () =>
{
  const { data: session, } = useSession()
  const { theme, setTheme } = useTheme()
  const modo = () =>
  {
    if (theme === 'light')
    {
      setTheme('dark')
    } else
    {
      setTheme('light')
    }
  }
  return (
    <nav className='text-2xl py-4 px-5 flex justify-between align-center dark:bg-darkSecondary dark:text-slate-700 h-24'>
      <Link href='/' className='nav-link mx-5 text-6xl'>Task App</Link>
      <div className='flex'>
        <Link href='/login' className='nav-link'>Login</Link>
        <Link href='/register' className='nav-link'>Register</Link>
        <Link href='/tareas' className='nav-link'>Tareas</Link>
      </div>

      {session?.user && (
        <button onClick={() => signOut()}>Sign Up</button>
      )}

      <div className='flex justify-between gap-6'>
        <button onClick={modo} className='nav-link'>
          {theme === 'light' ? <LuMoon /> : <LuSun />}
        </button>
      </div>

    </nav>
  )
}

export default NavBar