import styles from "./Home.module.css"
import SideBar from "../../components/SideBar"
import { Outlet } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <SideBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
