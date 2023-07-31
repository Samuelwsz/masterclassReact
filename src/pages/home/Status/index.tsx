import { FormEvent, KeyboardEvent, useState } from "react"
import Cabecalho from "../../../components/Cabecalho"
import Separador from "../../../components/Separador"
import Tweet from "../../../components/Tweets"
import styles from "./Status.module.css"
import { PaperPlaneRight } from "phosphor-react"

/*fluxo de renderização
1 Toda vez que alterarmos o estado de um componente, TODO componente é recalculado
2 Toda vez que o seu componente PAI renderizar
3 Toda vez que alguma de suas propriedades mudarem
*/

/* Algoritmo de reconciliação
1 criar em memoria a nova versao do html do componente
2 compara essa nova versao com a versao anterior do html (diff)
3 aplicar as operacoes JavaScript para alterar somente o necessario no html
*/

export default function Status() {
  const [newAnswers, setNewAnswers] = useState("")
  const [answers, setAnswers] = useState([
    "Concordo",
    "Olha, faz sentido",
    "Parabéns pelo progresso",
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers("")
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && event.ctrlKey) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers("")
    }
  }

  return (
    <>
      <main className={styles.status}>
        <Cabecalho title="Tweet" />

        <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iste, consectetur ea harum sit libero voluptatum fuga eaque culpa inventore! Placeat enim voluptatum officia animi optio sint fuga est libero." />

        <Separador />

        <form className={styles.answer_tweet_form} onSubmit={createNewAnswer}>
          <label htmlFor="tweet">
            <img src="https://github.com/samuelwsz.png" alt="Samuel" />
            <textarea
              id="tweet"
              value={newAnswers}
              placeholder="Tweet your answer"
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewAnswers(event.target.value)
              }}
            />
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>

        {answers.map((answer, index) => {
          return <Tweet key={index} content={answer} />
        })}
      </main>
    </>
  )
}
