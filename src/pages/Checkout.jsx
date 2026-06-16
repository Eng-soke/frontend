import {backendUrl} from '../config'
import {useState} from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
function Checkout(){

    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [city,setCity] = useState('')
    const navigate = useNavigate()

    const cart = useSelector((state)=> state.cart.items)
    const totalAmount = useSelector((state)=> state.cart.totalPrice)

    const handleCheckout = async (e)=>{
        e.preventDefault()
        try{
            const orderData = {
                userId: localStorage.getItem('userlogin'),
                products: cart.map((item)=>({
                    productId: item.productId,
                    quantity: item.quantity,
                    title: item.title,
                    price: item.price,
                    image: item.image
                })),
                shippingAddress: {
                    address: address,
                    city: city,
                    phone: phone
                },
                totalAmount: totalAmount
            }
            const response = await axios.post(`${backendUrl}/api/order/create`, orderData)
            if(response.data.success){
                toast.success('Order created successfully')
                navigate('/')
            }
        } catch (error) {
            toast.error('Failed to create order')
        }
    }

    
    return (
        <div  className="min-h-screen flex justify-center items-center bg-gray-100 ">
            <form onSubmit={handleCheckout} className="bg-white p-8 rounded-xl w-96">
            <h1 className="text-2xl font-bold mb-3">Checkout</h1>
            <input value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" className="w-full p-3 border mb-3 rounded" placeholder="Address" />
            <input value={city} onChange={(e)=>setCity(e.target.value)}  type="text" className="w-full p-3 border mb-3 rounded" placeholder="City" />
            <input value={phone} onChange={(e)=>setPhone(e.target.value)}  type="number" className="w-full p-3 border mb-3 rounded" placeholder="Phone Number" />
            <button className="w-full bg-indigo-600 text-white p-3 rounded">Place Order</button>
        </form>
        </div>
    )
}

export default Checkout