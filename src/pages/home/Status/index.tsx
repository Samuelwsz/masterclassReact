import Cabecalho from "../../../components/Cabecalho"
import Separador from "../../../components/Separador"
import Tweet from "../../../components/Tweets"
import styles from "./Status.module.css"

const answers = ["Concordo", "Olha, faz sentido", "Parabéns pelo progresso"]

export default function Status() {
  return (
    <>
      <main className={styles.status}>
        <Cabecalho title="Tweet" />

        <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iste, consectetur ea harum sit libero voluptatum fuga eaque culpa inventore! Placeat enim voluptatum officia animi optio sint fuga est libero." />

        <Separador />

        <form className={styles.answer_tweet_form}>
          <label htmlFor="tweet">
            <img src="https://github.com/samuelwsz.png" alt="Samuel" />
            <textarea id="tweet" placeholder="Tweet your answer" />
          </label>

          <button type="submit">Answer</button>
        </form>

        {answers.map((answer, index) => {
          return <Tweet key={index} content={answer} />
        })}
      </main>
    </>
  )
}
