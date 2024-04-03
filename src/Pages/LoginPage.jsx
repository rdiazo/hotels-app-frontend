import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/LoginPage/styles/LoginPage.css'


const LoginPage = () => {

const { handleSubmit, reset, register } = useForm()

const { loginUser } = useAuth()

const submit = data => {
  loginUser(data)
  reset({
    email:'',
    password: ''
  })
}

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

if(localStorage.getItem('token')){
  const { firstName, lastName, email} = JSON.parse(localStorage.getItem('user'))
   return (
    <div>
      <h2>Welcome {firstName + '' + lastName}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
   )
}

  return (
    <div className="login__container">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className="login__label__email">
          <span>Email</span>
          <input className="login__inputs" {...register('email')} type="email" />
        </label>
        <label className="login__label__password">
          <span>Password</span>
          <input className="login__inputs" {...register('password')} type="password" />
        </label>
        <button className="login__button">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage