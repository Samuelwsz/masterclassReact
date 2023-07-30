import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react"
import styles from "./Tweet.module.css"

interface TweetProps {
  content: string
}

export default function Tweet({ content }: TweetProps) {
  return (
    <>
      <a className={styles.tweet}>
        <img src="https://github.com/samuelwsz.png" alt="Samuel" />

        <div className={styles.tweet_content}>
          <div className={styles.tweet_content_header}>
            <strong>Samuel</strong>
            <span>@wsz</span>
          </div>
          <p>
            {content}
            {/* Acabei de migrar um projeto React GIGANTE de create-react-app para
            Vite e os resultados foram: <br /> <br />
            ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
            ✅ npm build: De 120s para 22s Além disso, troquei <br />
            <br />
  do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥*/}
          </p>

          <div className={styles.tweet_content_footer}>
            <button type="button">
              <ChatCircle />
              20
            </button>
            <button type="button">
              <ArrowClockwise />
              20
            </button>
            <button type="button">
              <Heart />
              20
            </button>
          </div>
        </div>
      </a>
    </>
  )
}
