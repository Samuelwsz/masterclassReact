import styles from "./Home.module.css"
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
  Sparkle,
} from "phosphor-react"
import Tweet from "../../components/Tweets"

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <img className={styles.logo} src={Logo} alt="" />

          <nav className={styles.main_navigation}>
            <a className={styles.active} href="">
              <House weight="fill" />
              Home
            </a>
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
        <div className={styles.content}>
          <main className={styles.timeline}>
            <div className={styles.timeline_header}>
              Home <Sparkle />
            </div>

            <form className={styles.new_tweet_form}>
              <label htmlFor="tweet">
                <img src="https://github.com/samuelwsz.png" alt="Samuel" />
                <textarea id="tweet" placeholder="What´s happening" />
              </label>

              <button type="submit">Tweet</button>
            </form>
            <div className={styles.separator} />
            <Tweet />
          </main>
        </div>
      </div>
    </>
  )
}
