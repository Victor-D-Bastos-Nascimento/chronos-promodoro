
import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica pomodoro</a>
      <a href="">Chonos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
      <p>© 2023 Meu App. Todos os direitos reservados.</p>
    </footer>

  );
}