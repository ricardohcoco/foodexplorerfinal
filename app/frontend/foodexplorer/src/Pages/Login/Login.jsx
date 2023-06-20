import { useNavigate } from "react-router-dom"
import FormLogin from "../../components/FormLogin/FormLogin"


function Login() {
  const navigate = useNavigate()

function goRegister(e) {
  e.preventDefault()
  navigate("/register")
}  
  
  return (
  <div> 
    <FormLogin goRegister={goRegister}/>
  </div>
  )
}

export default Login
