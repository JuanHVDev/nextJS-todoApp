'use client'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
export default function LoginPage()
{

  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const res = await signIn('credentials', { email: formData.get('email'), password: formData.get('password'), redirect: false })
    if (res?.error) return setError(res.error as string)
    if (res?.ok) return router.push('/tareas')
  }

  return (
    <div className='text-center'>
      <div className='p-2 mb-4'>
        <h1 className='text-4xl p-4'>Sign In</h1>
      </div>
      <div>
        {error && (<p className='bg-red-500 text-white mb-2 p-2'>{error}</p>)}
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col bg-violet-300 w-80 h-96 rounded-3xl mx-auto p-6'>
        <input className='buttons' type="email" placeholder='email@mail.com' name='email' />
        <input className='buttons' type="password" placeholder='Password' name='password' />
        <button type='submit' className='bg-white w-3/4 mx-auto rounded-xl p-2 text-xl '>
          Login
        </button>
      </form>

    </div>
  )
}
