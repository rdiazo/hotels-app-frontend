import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import '../components/RegisterPage/styles/RegisterPage.css'

document.body.classList.add('pagina-especifica');


const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      password: '',
      gender: 'other',
      email: ''
    })
  }

  return (

      <div className="register__container">
        <h2 className="register__title">Register</h2>
        <form onSubmit={handleSubmit(submit)}>
          <label className="register__label__firstName">
            <span>First Name</span>
            <input className="register__inputs" {...register('firstName')} type="text" />
          </label>
          <label className="register__label__lastName">
            <span>Last Name</span>
            <input className="register__inputs" {...register('lastName')} type="text" />
          </label>
          <label className="register__label__email">
            <span>Email</span>
            <input className="register__inputs" {...register('email')} type="email" />
          </label>
          <label className="register__label__email">
            <span>Password</span>
            <input className="register__inputs" {...register('password')} type="password" />
          </label>
          <label className="register__label__gender">
            <span>Gender</span>
            <select className="register__inputs" {...register('gender')}>
              <option value="other">other</option>
              <option value="male">male</option>
              <option value="female">female</option>

            </select>
          </label>
          <button className="register__button">Submit</button>
        </form>
      </div>

  )
}

export default RegisterPage