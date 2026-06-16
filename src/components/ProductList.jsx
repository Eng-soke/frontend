
import { useState, useEffect } from "react"
import axios from 'axios'
import Product from "./Product"
import SearchBar from "./SearchBar"
import { backendUrl } from "../config"
function ProductList(){
    
    const [data, setData] = useState([])

    const [searchItem, setSearchItem] = useState('')

    const handleSeacrhItem = (event)=>{
        setSearchItem(event.target.value)
    }

    const getAllData = async ()=>{
        try {
            const response = await axios.get(`${backendUrl}/api/get`)
            
            setData(response.data.data)
           

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getAllData()
    },[])

    return <div className="text-center mt-10"> 
        <SearchBar searchItem={handleSeacrhItem} />
        <h1 className="text-2xl font-bold">All Products</h1>

         <div className="grid grid-cols-4 place-self-center gap-6">
           
            {

                data.filter((product)=>{
                    return searchItem.toLowerCase() == '' ? product :
                    product.title.toLowerCase().includes(searchItem.toLowerCase())
                }).map((item)=>{
                    return <Product items={item} key={item.id} /> 
                })
            }
        </div>

 

    </div>
}
export default ProductList