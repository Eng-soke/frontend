import { useState, useEffect } from "react"
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header(){

    const [userLogin,setUserLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('userLogin')
        setUserLogin(!token)
    })

    const logOut = ()=>{
        localStorage.clear('userLogin')
        navigate('/login')
    }

    const allNumberOffItems = useSelector((state)=> state.cart.items)

    const [isIscrolled, setIsIscrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 50) {
                setIsIscrolled(true)
            }else{
                setIsIscrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return ()=> window.removeEventListener('scroll', handleScroll)
        
    },[])

    return <div className={`flex fixed top-0 w-full justify-around items-center pt-2 ${isIscrolled  ? 'bg-gray-300 shadow-md' : 'bg-transparent' } `}>

        <h1 className="text-4xl font-semibold ">E-<span className="text-indigo-500 ">suuq</span> </h1>

        <ul className="flex gap-10">
            <Link to="/">
            <li>Home</li>
            </Link>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div>
            {
                userLogin ? (

                    <button onClick={logOut} className="bg-gray-400 px-10 m-1 rounded ">LogOut</button>
                ): (
                    <>
                    <button className="bg-indigo-400 px-10 m-1 rounded ">Sign in</button>
                    <button className="bg-black text-white px-10 m-1 rounded ">Sign up</button>
                    </>
                )
            }
        </div>

        <Link to='/cart'>
        <div className="relative">
            <p className="text-2xl font-semibold"><IoCartOutline/></p> 
            <p className="bg-black h-6 w-6 rounded-full absolute top-4 right-2 leading-6 text-white text-center "> {allNumberOffItems.length} </p>
        </div>
        </Link>

    </div>
}
export default Header