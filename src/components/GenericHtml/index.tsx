import styles from './styles.module.css' 

type GenerichtmlProps = {
  children: React.ReactNode
}

export function GenericHtml({ children }: GenerichtmlProps) {
  return (
  <div className={styles.genericHtml}>
      {children}
    </div>
  )
}