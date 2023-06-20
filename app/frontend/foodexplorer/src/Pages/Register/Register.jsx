import { useNavigate } from "react-router-dom"
import FormRegister from "../../components/FormRegister/FormRegister"

function Register() {
  const navigate = useNavigate()

  function goLogin(e) {
  e.preventDefault()
  navigate("/")
}  
  
  return (
  <div> 
    <FormRegister goLogin={goLogin}/>
  </div>
  )
}

export default Register