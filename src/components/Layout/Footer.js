import Container from '../UI/Container'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Виконано в{' '}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: 'inherit' }}
            href="https://prometheus.org.ua/"
          >
            Prometheus
          </a>{' '}
          © 2022
        </p>
      </Container>
    </footer>
  )
}

export default Footer
