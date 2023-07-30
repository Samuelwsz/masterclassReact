import Cabecalho from "../../components/Cabecalho"
import styles from "./Status.module.css"

export default function Status() {
  return (
    <>
      <main className={styles.timeline}>
        <Cabecalho title="Tweets" />

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
