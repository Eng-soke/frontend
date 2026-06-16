import SideBar from "../components/SideBar"
import { useState, useEffect } from "react"
import { backendUrl } from "../../config"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
function AddProducts() {

     const navigate = useNavigate()

        useEffect(()=>{
            const token = localStorage.getItem('adminLogin')
            if(!token){
                navigate('/admin/login')
            }
    
        })

    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const addProduct = async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('price', price)
        formData.append('description', description)

        try {

            const response = await axios.post(`${backendUrl}/api/create`, formData)
            console.log(response.data);

            if(response.data.success){
                toast.success(response.data.message)
                setImage(null)
                setTitle('')
                setPrice('')
                setDescription('')
            }else{
               toast.error(response.data.message) 
            }
            
            
        } catch (error) {
            log(error);
            toast.error('Something went wrong')
        }
    }
   

    return (


        
        <div className="flex-1 min-h-screen bg-gray-100 ">
            {/* Header */}
            <div>

            <SideBar/>

            <div className="mb-8  ml-[24%]">

                <h1 className="text-3xl font-bold text-gray-800">
                    Add Product
                </h1>

                <p className="text-gray-500 mt-2">
                    Add your new products here
                </p>

            </div>

            {/* Form Container */}
            <form onSubmit={addProduct} className="bg-white ml-[24%] rounded-2xl shadow-md p-8 max-w-3xl">

                {/* Upload Image */}
                <div className="mb-6">

                    <label className="block text-gray-700 font-semibold mb-2">
                        Product Image
                    </label>

                    <label htmlFor="image" className="border-2 border-dashed border-gray-300 rounded-2xl h-52 flex items-center justify-center cursor-pointer hover:border-indigo-500 transition">
                       
                        {
                            image ? (
                                <img src={URL.createObjectURL(image)} className="h-full w-full object-cover rounded-2xl " alt="" />
                            ):(

                                <p className="text-gray-400">  Click to upload image</p>
                            )
                        }
                           
                                
                            
                        
                          

                    </label>

                    <input type="file" id="image"  hidden onChange={(e)=> setImage(e.target.files[0])} />

                </div>

                {/* Product Name */}
                <div className="mb-6">

                    <label className="block text-gray-700 font-semibold mb-2">
                        Product Name
                    </label>

                    <input value={title} onChange={(e)=>setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter product name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>

                {/* Price */}
                <div className="mb-6">

                    <label className="block text-gray-700 font-semibold mb-2">
                        
                    </label>

                    <input value={price} onChange={(e)=>setPrice(e.target.value)}
                        type="number"
                        placeholder="Enter product price"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>

                {/* Description */}
                <div className="mb-6">

                    <label className="block text-gray-700 font-semibold mb-2">
                        Description
                    </label>

                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)}
                        rows="5"
                        placeholder="Write product description..."
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>

                </div>

                {/* Button */}
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300">

                    Add Product

                </button>

            </form>
        </div>
        <Toaster/>
        </div>

    )

}

export default AddProducts
