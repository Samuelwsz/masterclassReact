import { FormEvent, useState } from "react"
import Cabecalho from "../../../components/Cabecalho"
import Separador from "../../../components/Separador"
import Tweet from "../../../components/Tweets"
import styles from "./Timeline.module.css"

let newTweet = ""

export default function Timelime() {
  const [tweets, setTweets] = useState(["tweet 1", "tweet 2 ", "tweet 3"])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
  }

  return (
    <>
      <main className={styles.timeline}>
        <Cabecalho title="Home" />

        <form className={styles.new_tweet_form} onSubmit={createNewTweet}>
          <label htmlFor="tweet">
            <img src="https://github.com/samuelwsz.png" alt="Samuel" />
            <textarea
              id="tweet"
              placeholder="What´s happening"
              onChange={(event) => {
                newTweet = event.target.value
              }}
            />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separador />

        {tweets.map((tweet, index) => {
          return <Tweet key={index} content={tweet} />
        })}
      </main>
    </>
  )
}
