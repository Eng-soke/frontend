import { useEffect } from "react"
import { backendUrl } from "../config"
import {useState} from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
function Register(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate  = useNavigate()

    const hanldeLogin = async (e)=>{
        e.preventDefault()
        try {

            const response = await axios.post(`${backendUrl}/api/user/register`, {email,password,name})
            if(response.data.success){
                localStorage.setItem('userlogin', response.data.token) 
                
                toast.success('user login success')
                navigate('/login')
            }
            
        } catch (error) {
            console.log(error)
            toast.error(response.data.message)
        }
    }

    return <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
        <form onSubmit={hanldeLogin} className="bg-white p-8 rounded-xl w-96">
            <h1 className="text-2xl font-bold mb-3">Register</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="w-full p-3 border mb-3 rounded" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full p-3 border mb-3 rounded" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" className="w-full p-3 border mb-3 rounded" />
            <button className="w-full bg-indigo-600 text-white p-3 rounded">Login</button>
        </form>
        <Toaster/>
    </div>
}
export default Register