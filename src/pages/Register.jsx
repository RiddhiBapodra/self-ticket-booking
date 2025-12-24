import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Apiservice } from "../services/Apiservice"

const Register = () => {
const [formData , setFormData] = useState({
    name : "" ,
    email : "" ,
    phone : "" ,
    password : ""
});

const [error , setErrors] = useState({});
const Validate=()=>{
    const errors = {};
    if(!formData.name.trim()){
        errors.name = "Name is required";
    }
    if(!formData.email.trim()){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
            errors.email = "Invalid email format";
        }else
        errors.email = "Email is required";
    }
    if(!formData.phone.trim()){
        const phoneRegex = /^\d{10}$/;
        if(!phoneRegex.test(formData.phone)){
            errors.phone = "Invalid phone number";
        }else
        errors.phone = "Phone number is required";
    }
    if(!formData.password.trim()){
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!passwordRegex.test(formData.password)){
            errors.password = "Password must be at least 8 characters long and contain both letters and numbers";
        }else
        errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;    

}
    
const navigate = useNavigate()

const handlesubmit = async () => {
   console.log(formData);

   if(!Validate())  return;
    const res = await Apiservice.post("user/add",formData);
    setFormData({
        name : "" ,
        email : "" ,
        phone : "" ,
        password : ""
    });
    setErrors({});
    console.log(res);
    navigate('/login');



}
const handleInputchange = (e) =>
{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
    // console.log(setFormData);
   
}
  return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white">
            <div className="w-full max-w-md rounded-2xl p-6 sm:p-8">

                {/* Logo */}
              <div className="flex justify-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-xl text-white font-bold">
                      LOGO
                  </div>
              </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Register
                </h1>
                <p className="text-center text-gray-500 mt-1">
                    Create an account to continue
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4" >

                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Full Name
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputchange}
                                placeholder="John Doe"
                                className="w-full pl-4 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputchange}
                                placeholder="you@example.com"
                                className="w-full pl-4 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Mobile Number
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputchange}
                                placeholder="9876543210"
                                className="w-full pl-4 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputchange}
                                placeholder="••••••••"
                                className="w-full pl-4 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        className="w-full py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                        onClick={handlesubmit}
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 mt-6 text-sm">
                    You already have an account?{" "}
                    <button onClick={() => navigate('/login')} className="text-orange-500 font-medium cursor-pointer">
                        Sign in here
                    </button>
                </p>
            </div>
        </div>
    )
}
export default Register
