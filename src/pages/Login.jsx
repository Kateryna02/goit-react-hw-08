import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/operations";


export default function Login() {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        toast.success('Login success')
        dispatch(loginUser(values))
         
    }
    const initialValues = {
        email: '',
        password: '',
    }
  return (
     
          <AuthForm title="Login" onSubmit={handleSubmit} initialValues={initialValues} />
      
  
  )
}
