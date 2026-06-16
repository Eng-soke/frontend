import { CiSearch } from "react-icons/ci";

function SearchBar({searchItem}){
    return <div className="">
        <div className="rounded-full max-w-150 w-150 place-self-center border-2 rounded-gray-500 relative">
            <input onChange={searchItem} type="text" placeholder="enter product name"  />
            <CiSearch className="absolute right-2 top-1"/>
        </div>
    </div>
}
export default SearchBar