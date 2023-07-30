import { createBrowserRouter } from "react-router-dom"
import Timelime from "../pages/home/Timeline"
import Status from "../pages/home/Status"
import Home from "../pages/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Timelime />,
      },
      {
        path: "/tweet",
        element: <Status />,
      },
    ],
  },
])
