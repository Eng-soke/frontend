import { Link } from "react-router-dom"


function SideBar() {

    return (

        <div className="w-64 fixed min-h-screen bg-gray-900 text-white p-6">

            {/* Title */}
            <h1 className="text-3xl font-bold mb-10 text-center">
                Dashboard
            </h1>

            {/* Menus */}
            <ul className="flex flex-col gap-4">
                <Link to='/admin/addproducts'>
                <li className="bg-indigo-600 px-5 py-4 rounded-xl cursor-pointer hover:bg-indigo-700 transition duration-300">
                    Add Product
                </li>
                 </Link>

                <Link to='/admin/lists'>
                <li className="bg-gray-800 px-5 py-4 rounded-xl cursor-pointer hover:bg-gray-700 transition duration-300">
                    Lists
                </li>
                </Link>

                <Link to='/order/List'>
                <li className="bg-gray-800 px-5 py-4 rounded-xl cursor-pointer hover:bg-gray-700 transition duration-300">
                    Orders
                </li>
                </Link>

            </ul>

        </div>

    )

}

export default SideBar