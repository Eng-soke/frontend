import { backendUrl } from "../../config"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AdminLogin() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hadnleSubmit = async (e)=>{
        e.preventDefault()

        try {

            const response = await axios.post(`${backendUrl}/api/admin/login`,{email, password})
            if(response.data.success){
                localStorage.setItem('adminLogin', response.data.token)
                toast.success(response.data.message)
                navigate('/admin/addproducts')
            }else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }


    }

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            {/* Login Card */}
            <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

                {/* Header */}
                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-gray-800">
                        Admin Login
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Welcome back admin panel
                    </p>

                </div>

                {/* Form */}
                <form onSubmit={hadnleSubmit} className="space-y-6">

                    {/* Email */}
                    <div>

                        <label className="block text-gray-700 font-semibold mb-2">
                            Email Address
                        </label>

                        <input
                            type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    {/* Password */}
                    <div>

                        <label className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>

                        <input
                            type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    

                    {/* Button */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300">

                        Login

                    </button>

                </form>

            </div>
        <Toaster/>
        </div>

    )

}

export default AdminLogin