import { FormEvent, KeyboardEvent, useState } from "react"
import Cabecalho from "../../../components/Cabecalho"
import Separador from "../../../components/Separador"
import Tweet from "../../../components/Tweets"
import styles from "./Timeline.module.css"

export default function Timelime() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState(["tweet 1", "tweet 2 ", "tweet 3"])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet("")
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && event.ctrlKey) {
      setTweets([newTweet, ...tweets])
      setNewTweet("")
    }
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
              value={newTweet}
              placeholder="What´s happening"
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value)
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
