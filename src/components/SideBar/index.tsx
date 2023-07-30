import styles from "./SideBar.module.css"
import Logo from "../../assets/Logo.svg"
import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react"
import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.logo} src={Logo} alt="" />

        <nav className={styles.main_navigation}>
          <Link className={styles.active} to="/">
            <House weight="fill" />
            Home
          </Link>

          <a href="">
            <Hash /> Explore
          </a>
          <a href="">
            <Bell /> Notifications
          </a>
          <a href="">
            <Envelope /> Messages
          </a>
          <a href="">
            <BookmarkSimple /> Bookmarks
          </a>
          <a href="">
            <FileText /> Lists
          </a>
          <a href="">
            <User /> Profile
          </a>
          <a href="">
            <DotsThreeCircle /> More
          </a>
        </nav>

        <button className={styles.new_tweet} type="button">
          Tweet
        </button>
      </aside>
    </>
  )
}
