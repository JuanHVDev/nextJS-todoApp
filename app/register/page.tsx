'use client'
import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
export default function RegisterPage()
{

  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    try
    {
      const signupResponse = await axios.post('api/auth/signup', {
        email: formData.get("email"),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
      })

      const res = await signIn('credentials', { email: signupResponse.data.email, password: formData.get('password'), redirect: false })

      console.log(res)

      if (res?.ok) return router.push('/tareas')

    } catch (error)
    {
      console.log(error)
      if (error instanceof AxiosError)
        setError(error.response?.data.message)
    }
  }

  return (
    <div className='text-center'>
      <div className='p-2 mb-4'>
        <h1 className='text-4xl p-4'>Register</h1>
      </div>
      <div>
        {error && (<p className='bg-red-500 text-white mb-2 p-2'>{error}</p>)}
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col w-80 h-96 rounded-3xl mx-auto p-6'>
        <input className='buttons' type="text" placeholder='Juan' name='fullname' />
        <input className='buttons' type="email" placeholder='email@mail.com' name='email' />
        <input className='buttons' type="password" placeholder='Password' name='password' />
        <button type='submit' className=' w-3/4 mx-auto rounded-xl p-2 text-xl'>
          Register
        </button>
      </form>

    </div>
  )
}
