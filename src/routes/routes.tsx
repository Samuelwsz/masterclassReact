import { createBrowserRouter } from "react-router-dom"
import Timelime from "../components/Timeline"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timelime />,
  },
  {
    path: "/tweet",
    element: <h1>pagina tweet</h1>,
  },
])
