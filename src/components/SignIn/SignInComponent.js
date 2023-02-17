import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignInComponent.module.css'
import avatarImage from '../../assets/images/avatar.png'
import Container from '../UI/Container'
import userContext from '../../store/user-context'
import MyButton from '../UI/MyButton'

const SignInComponent = () => {
  const navigation = useNavigate()
  const [value, setValue] = useState('')
  const context = useContext(userContext)
  const inputChangeHandler = (e) => {
    setValue(e.target.value)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    navigation('../books')
    context.setUserName(value)
  }
  return (
    <section className={styles['sing-in']}>
      <Container>
        <form onSubmit={formSubmitHandler} className={styles['sing-in__form']}>
          <img
            className={styles['sing-in__img']}
            src={avatarImage}
            alt="avatar"
          />
          <label className={styles['sing-in__label']} htmlFor="username">
            Username
          </label>
          <input
            className={styles['sing-in__input']}
            type="text"
            id="username"
            onChange={inputChangeHandler}
            value={value}
          />
          <MyButton
            className={styles['sing-in__btn']}
            disabled={value.length < 4 || value.length > 16}
          >
            Sing in
          </MyButton>
        </form>
      </Container>
    </section>
  )
}

export default SignInComponent
