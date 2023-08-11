import { Suspense } from "react"
import FormTareas from "../components/FormTareas"
import ListTareas from "../components/ListTareas"
import LoadingPage from "./loading"


const page = () =>
{
  return (
    <>
      <h1 className="text-6xl font-bold text-center p-8">TaskApp</h1>
      <FormTareas />
      <Suspense fallback={<LoadingPage />} >
        <ListTareas />
      </Suspense>

    </>
  )
}

export default page