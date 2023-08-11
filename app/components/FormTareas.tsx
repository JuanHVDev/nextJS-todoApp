'use client'
import { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'



type Props = {}

const FormTareas = (props: Props) =>
{
  const { data: session } = useSession()
  const router = useRouter()
  const [tarea, setTarea] = useState('')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, refresh) =>
  {
    e.preventDefault()
    console.log(session?.user?.email)
    try
    {
      const tareaResponse = await fetch('api/tasks', {
        method: "POST", body: JSON.stringify({
          titulo: tarea,
          creado: Date.now(),
          completed: false,
          email: session?.user?.email
        })
      },)
      console.log(tareaResponse)
      setTarea('')
      refresh()
    } catch (error)
    {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e, router.refresh)} className='mx-auto border rounded-2xl flex w-96 h-32'>
      <input value={tarea} onChange={(e) => setTarea(e.target.value)} type="text" className='buttons' placeholder='Ingresa tu tarea' />
    </form>
  )
}

export default FormTareas