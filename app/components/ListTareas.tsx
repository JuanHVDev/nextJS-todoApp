import next from "next/types"
import TareaItem from "./TareaItem"
import axios from "axios"

const getTareas = async () =>
{

  const res = await fetch('http:/localhost:3000/api/tasks', { cache: 'no-store' })

  return res.json()
}



const ListTareas = async () =>
{
  const { tareas } = await getTareas()

  return (
    <div className="grid grid-rows-2 text-center justify-center">
      {tareas.map((t: Tarea) => (
        <TareaItem tarea={t} />
      ))}
    </div>
  )
}

export default ListTareas