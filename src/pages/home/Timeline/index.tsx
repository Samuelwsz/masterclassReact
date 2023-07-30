import Cabecalho from "../../../components/Cabecalho"
import Separador from "../../../components/Separador"
import Tweet from "../../../components/Tweets"
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

        <Separador />

        {Tweets.map((tweet, index) => {
          return <Tweet key={index} content={tweet} />
        })}
      </main>
    </>
  )
}
