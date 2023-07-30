import { createBrowserRouter } from "react-router-dom"
import Timelime from "../pages/home/Timeline"
import Status from "../pages/home/Status"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timelime />,
  },
  {
    path: "/tweet",
    element: <Status />,
  },
])
