'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineCheckCircle, AiFillDelete } from 'react-icons/ai'

type Props = {
  tarea: Tarea,
}

const TareaItem = ({ tarea }: Props) =>
{
  const router = useRouter()
  const deleteTarea = async (id: string, refresh) =>
  {
    const res = await fetch('http://localhost:3000/api/tasks', {
      method: 'DELETE',
      body: JSON.stringify({
        id,
      })
    })

    refresh()
  }

  const updateTarea = async (tarea: Tarea, refresh) =>
  {
    const res = await fetch('http://localhost:3000/api/tasks', {
      method: 'PUT',
      body: JSON.stringify({
        tarea,
        completed: !tarea.completed
      })
    })

    refresh()
  }

  return (
    <div className={`border border-2  rounded-xl text-xl rounded-xl p-2 mt-10 w-64 flex justify-between ${tarea.completed ? 'line-through bg-green-600' : ""}`} key={tarea._id}>
      <h1 >
        {tarea.titulo}
      </h1>
      <div className="flex justify-between ">
        <button className="mx-2" onClick={() => updateTarea(tarea, router.refresh)}>
          <AiOutlineCheckCircle />
        </button>
        <button type='button' onClick={() => deleteTarea(tarea._id, router.refresh)} className="mx-2" >
          <AiFillDelete />
        </button>
      </div>
    </div>
  )
}

export default TareaItem