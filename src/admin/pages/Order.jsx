import { useState, useEffect } from "react"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import { backendUrl } from "../../config"
import SideBar from "../components/SideBar"

function Order(){

    const [orders,setOrders] = useState([])
    const [loading,setLoadin] = useState(true)

    const getOrder = async ()=>{
        try{
            const response = await axios.get(`${backendUrl}/api/order/get`)
            if(response.data.success){
                setOrders(response.data.data)
            }
        }catch(error){
            console.log(error);
            
        }finally{
            setLoadin(false)
        }
    }

    useEffect(()=>{
        getOrder()
    },[])

    if(loading){
        return <h1 className="text-center text-3xl mt-4">Loading...</h1>
    }

    return (
        <div>
            <SideBar/>

            <div className="max-w-3xl mx-auto p-5 mb-6">

                {
                    orders.length === 0 ? (
                        <h1>No order found</h1>
                    ): (
                        orders.map((order)=>(
                            
                            <div key={order._id} className="border p-5 mb-5" >
                                {
                                    order.products.map((item,index)=>(
                                        <div key={index} className="flex gap-4 items-center  ">

                                            <img className="w-20 h-20 rounded-lg bg-cover " src={`${backendUrl}/images/${item.image}`} alt="" />
                                            <div>
                                                <p>Title: {item.title} </p>
                                                <p>Quantity: {item.quantity} </p>
                                                <h1 className="font-semibold">Price: ${item.price} </h1>
                                            </div>
                                        </div>
                                    ))
                                }

                                 <div>
                                <p>
                                    <strong>Address: </strong>{''}
                                    {order.shippingAddress?.address}
                                </p>
                                <p>
                                    <strong>City: </strong>
                                    {order.shippingAddress?.city}
                                </p>
                                <p>
                                    <strong>Phone: </strong>
                                    {order.shippingAddress?.phone}
                                </p>
                            </div>
                            </div>

                           

                            
                        ))

                        
                    )
                }


            </div>

        </div>
    )
}

export default Order