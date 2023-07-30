import { Sparkle } from "phosphor-react"
import styles from "./Cabecalho.module.css"

interface CabecalhoProps {
  title: string
}

export default function Cabecalho({ title }: CabecalhoProps) {
  return (
    <>
      <div className={styles.timeline_header}>
        {title} <Sparkle />
      </div>
    </>
  )
}
