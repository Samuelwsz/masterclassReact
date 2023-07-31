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
  Pencil,
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
            <span>Home</span>
          </Link>

          <a href="">
            <Hash /> <span>Explore</span>
          </a>
          <a href="">
            <Bell /> <span>Notifications</span>
          </a>
          <a href="">
            <Envelope /> <span>Messages</span>
          </a>
          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText /> <span>Lists</span>
          </a>
          <a href="">
            <User /> <span>Profile</span>
          </a>
          <a href="">
            <DotsThreeCircle /> <span>More</span>
          </a>
        </nav>
        <Link to="/tweet" style={{ textDecoration: "none" }}>
          <button className={styles.new_tweet} type="button">
            <Pencil />
            <span>Tweet</span>
          </button>
        </Link>
      </aside>
    </>
  )
}
