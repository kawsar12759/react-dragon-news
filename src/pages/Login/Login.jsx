import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>console.error(error));



    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-3xl text-center 
            font-semibold text-[#403F3F]">Login your account</h2>

                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                        </label>
                        <input type="email"
                            name="email" placeholder="Email" className="input input-bordered bg-[#F3F3F3] rounded-md border-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                        </label>
                        <input type="password" placeholder="Password"
                            name="password" className="input input-bordered bg-[#F3F3F3] rounded-md border-none" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link to='/register' className="text-blue-600">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;