import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";


export default function Registor() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleSubmit = values => {
        dispatch(registerUser(values))
            .unwrap()
            .then(data => {
                toast.success(`Welcome, ${data.user.name}!`)
              navigate('/')
            })
            .catch(() => toast.error('Credentials invalid'))
    }
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

  return (
    
      <AuthForm title='Register' onSubmit={handleSubmit} initialValues={initialValues} type='register'/>
        
   
  )
}
