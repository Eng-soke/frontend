import Header from "../components/Header"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart,calculateTotalPrice,calculateTotalQuantity, increament, decreament } from "../redux/reduce/cart";
import toast, {Toaster} from "react-hot-toast";
import Price from "./Price";
import { backendUrl } from "../config";
function Cart() {

    const allItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const handelRemoveItemFromCart = (id)=>{
        dispatch(removeItemFromCart(id))
        dispatch(calculateTotalPrice())
        dispatch(calculateTotalQuantity())

        toast.success('item removed successfully',{
            position: "top-center"
        })
    }

    const handleIncreament = (id)=>{
        dispatch(increament(id))
        dispatch(calculateTotalPrice())
        dispatch(calculateTotalQuantity())
    }
    const handleDecreament = (id)=>{
        dispatch(increament(id))
        dispatch(calculateTotalPrice())
        dispatch(calculateTotalQuantity())
    }


    return <div>
        <Header />
        <div className="ml-[8%] mt-[6%]">
            {
                allItems.map((data) => {
                    return <div className="flex border-b-2  mx-10 my-2 p-1 justify-around items-center">
                        <img className="w-20 h-20 rounded-md " src={`${backendUrl}/images/${data.image}`} alt="" />
                        <span className="font-bold">${data.price} </span>
                        <div className="flex gap-4 items-center ">
                            <span onClick={()=> handleDecreament(data)} className="text-2xl"><CiCircleMinus /> </span>
                            <h1>{data.quantity} </h1>
                            <span onClick={()=> handleIncreament(data)} className="text-2xl"> <CiCirclePlus /></span>
                        </div>
                        <span onClick={()=> handelRemoveItemFromCart(data)} className="text-red-500"><MdDelete /> </span>
                    </div>
                })
            }
        <Toaster/>
        </div>
        <Price/>
    </div>
}
export default Cart