import SideBar from "../components/SideBar"
import { useState, useEffect } from "react"
import { backendUrl } from "../../config"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
function Lists() {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    
    useEffect(()=>{
        const token = localStorage.getItem('adminLogin')
        if(!token){
            navigate('/admin/login')
        }

    })

    useEffect(()=>{
        const getAllData = async ()=>{
            try {

                const response = await axios.get(`${backendUrl}/api/get`)
                console.log(response.data);
                setProducts(response.data.data)
                
                
            } catch (error) {
                console.log(error);
                
            }
        }

        getAllData()
    },[])


    const deleteItem = async (id)=>{
        try {

            await axios.delete(`${backendUrl}/api/delete/${id}`)
            toast.success('Product deleted successfully')
        } catch (error) {
            log(error);
            toast.error('Something went wrong')
        }
    }

    return (

        <div className="flex-1 min-h-screen bg-gray-100 pr-4">

            {/* Header */}
            <div>

                <SideBar/>

            </div>

            <div className="mb-8  ml-[24%]">

                <h1 className="text-3xl font-bold text-gray-800">
                    Product Lists
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage all your products here
                </p>

            </div>

            {/* Table Container */}
            <div className="bg-white  ml-[24%] rounded-2xl shadow-md overflow-hidden">

              

                {/* Table Header */}
                <div className="grid grid-cols-4 bg-gray-900 text-white px-2 py-4 font-semibold">

                    <p>Image</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Action</p>

                </div>

                {/* Product Item */}

                {
                    products.map((item)=>{
                        return <div key={item._id} className="grid grid-cols-4 items-center px-2 py-5 border-b hover:bg-gray-50 transition">

                    

                    {/* Image */}
                    <div>

                        <img
                            className="w-16 h-16 rounded-xl object-cover"
                            src={`${backendUrl}/images/${item.image}`}
                            alt="image"
                        />

                    </div>

                    {/* Title */}
                    <p className="font-semibold text-gray-700">
                        {item.title}
                    </p>

                    {/* Price */}
                    <p className="font-bold text-indigo-600">
                        ${item.price}
                    </p>

                    {/* Action */}
                    <div className="">

                        <button onClick={()=> deleteItem(item._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                            Delete
                        </button>

                    </div>

                </div>

                    })
                }


                
            </div>
            <Toaster/>
        </div>

    )

}

export default Lists
