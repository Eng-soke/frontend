import { addToCartItem, calculateTotalPrice,calculateTotalQuantity } from "../redux/reduce/cart"
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import { backendUrl } from "../config"
function Product({items}){
    const dispatch = useDispatch()

    const handleAddToCart = ()=>{
        dispatch(addToCartItem(items))
        dispatch(calculateTotalPrice())
        dispatch(calculateTotalQuantity())
        toast.success('item added successfully',{
            position: "top-right"
        })
    }


    return <div className="bg-white shadow w-60 p-4 mt-10">

        <div>
            <img className="w-60 h-50 rounded-2xl " src={`${backendUrl}/images/${items.image}`} alt="" />
            <p className="font-semibold text-xl">{items.title} </p>
        </div>

        <div className="flex justify-between mt-2">
            <h1 className="font-bold">${items.price} </h1>
            <button onClick={handleAddToCart} className="bg-indigo-500 px-2 rounded text-white">Add to cart</button>
        </div>
    <Toaster/>
    </div>
}
export default Product