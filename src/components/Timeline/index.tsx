import Cabecalho from "../Cabecalho"
import Tweet from "../Tweets"
import styles from "./Timeline.module.css"

const Tweets = ["tweet 1", "tweet 2 ", "tweet 3"]

export default function Timelime() {
  return (
    <>
      <main className={styles.timeline}>
        <Cabecalho title="Home" />

        <form className={styles.new_tweet_form}>
          <label htmlFor="tweet">
            <img src="https://github.com/samuelwsz.png" alt="Samuel" />
            <textarea id="tweet" placeholder="What´s happening" />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <div className={styles.separator} />

        {Tweets.map((tweet, index) => {
          return <Tweet key={index} content={tweet} />
        })}
      </main>
    </>
  )
}
