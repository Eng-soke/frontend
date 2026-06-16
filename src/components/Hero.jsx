import { assets } from "../assets/assets"
import { useState, useEffect } from "react"

function Hero(){

    const [curentIndex, setCurentIndex] = useState(0)

    const images = [
        assets.heroimage1,
        assets.heroimage2,
        assets.heroimage3,
        assets.heroimage4
    ]


    useEffect(()=>{

        const interval = setInterval(()=>{

            setCurentIndex((prevIndex)=>
                prevIndex == images.length - 1 ? 0 : prevIndex + 1
            )

        },3000)

        return ()=> clearInterval(interval)

    },[images.length])
    


    return <div className="w-full max-w-250 h-120 bg-center bg-cover place-self-center mt-20 rounded-2xl transition-opacity duration-1000 "
    
     style={{backgroundImage: `url(${images[curentIndex]})`, opacity: 1}}
    
    >

        <div className="px-16 py-40">

            <h1 className=" text-5xl  ">STYLISH</h1>
            <p className="text-2xl font-extralight ">female clothes</p>
            <button className="bg-indigo-500 px-16 rounded-sm text-white">Shop now</button>
        </div>

    </div>
}
export default Hero