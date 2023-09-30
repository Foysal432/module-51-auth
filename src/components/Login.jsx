import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
    const {singInUser,singwithgoogle}=useContext(AuthContext)
    const navigate =useNavigate()
    const handeLogin = e =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value
        console.log(email,password);
        e.target.reset()
        navigate('/')
        singInUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

    }
    const singInWithGoogle =()=>{
      singwithgoogle()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handeLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="Email" required placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>
              <p>New ? please Go to <Link to="/register">Register</Link> </p>
              <p>Log in with <button onClick={singInWithGoogle} className="btn btn-ghost">Google</button></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;