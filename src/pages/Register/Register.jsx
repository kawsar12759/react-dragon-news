import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.error(error));
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-3xl text-center 
            font-semibold text-[#403F3F]
            ">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Name</span>
                        </label>
                        <input type="text"
                            name="name" placeholder="Name" className="input input-bordered bg-[#F3F3F3] rounded-md border-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Photo URL</span>
                        </label>
                        <input type="text"
                            name="photo" placeholder="Photo URL" className="input input-bordered bg-[#F3F3F3] rounded-md border-none" required />
                    </div>
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
                            name="password" className="input input-bordered bg-[#F3F3F3] rounded-md border-none " required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;