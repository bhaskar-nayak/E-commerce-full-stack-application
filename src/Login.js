
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './styles/Login.css';

function Login(){

    const {register, handleSubmit, formState: { errors } } = useForm();
    
    const navigate = useNavigate();
    const loginUser = (data) =>{
        axios.post('http://localhost:9091/api/v1/user/login', data).then(response =>{
            console.log(response)
            navigate('/');
        }).catch(error =>{
            console.log('getting error')
        })
    }
    return(
        <div className="loginbackground">
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h2 className="text-center mt-3">Login</h2>
                    <form onSubmit={handleSubmit(loginUser)} noValidate>
             <div className="mb-3">
                 <label for="email" className="form-label">Email address</label>
                   <input type="email" className="form-control" id="email"{...register('email', {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
                   {errors.email?.type === 'required' && <p className="text-danger">please enter email</p>}
                   {errors.email?.type === 'pattern' && <p className="text-danger">incorrect email format</p>}
              </div>
              <div className="mb-3">
                 <label for="password" className="form-label">password</label>
                 <input type="password" className="form-control" id="password"{...register('password', {required:true})}/>
                 {errors.password?.type === 'required' && <p className="text-danger">please enter password</p>}
              </div>
                   <button type="submit" className="btn btn-primary text-bg-dark mb-3">login</button>
                   <div className="mt-3 mb-3">
                    <p>Don't have an account?<Link to={"/Register"}><span ><button className="p-1 mx-2 border-0 rounded-pill">Create one</button></span></Link></p>
                   </div>
             </form>
             </div>

            </div>

        </div>
        </div>
    )
}
export default Login;