import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = values => {
        toast.success('Login success')
        dispatch(loginUser(values))
            .unwrap()
            .then(() => navigate('/'))
            .catch(() => toast.error('Credentials invalid'))
    }
    const initialValues = {
        email: '',
        password: '',
    }
  return (
     
          <AuthForm title="Login" onSubmit={handleSubmit} initialValues={initialValues} />
      
  
  )
}
