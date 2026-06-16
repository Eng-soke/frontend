import { useSelector } from "react-redux"
import {useNavigate,Link} from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
function Price(){
    const price = useSelector((state)=> state.cart.totalPrice)
    const qty = useSelector((state)=> state.cart.totalQuantity)

    
    const handleCheckout = ()=>{
        const token = localStorage.getItem('userLogin')
        if(!token){
            toast.error('Please login to proceed to checkout')
            navigate('/login')
        }else{
            navigate('/checkout')
        }
    }  

    return <div className="absolute right-0">

        <div className="border-b-2 w-75 border-gray-300 flex justify-between my-4 ">
            <h1 className="font-bold">Total Price</h1>
            <p>${price} </p>
        </div>

        <div className="border-b-2 border-gray-300 flex justify-between my-4 ">
            <h1 className="font-bold">Total Quantity</h1>
            <p>{qty}</p>
        </div>
        <Link to='/checkout'>
        <button onClick={handleCheckout} className="bg-indigo-500 p-2 text-white rounde px-28" >Checkout</button>
        </Link>
    </div>
}
export default Price