
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    
    const handeregister = e =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        console.log(name,email,password);
        // create user in firebase
      createUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handeregister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" required placeholder="Your Name" name="name" className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
              <p>Have Account ? please Go to <Link to="/login">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;