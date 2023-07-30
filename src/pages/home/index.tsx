import styles from "./Home.module.css"
import SideBar from "../../components/SideBar"
import { RouterProvider } from "react-router-dom"
import { router } from "../../routes/routes"

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <SideBar />
        <div className={styles.content}>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}
