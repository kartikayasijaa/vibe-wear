import React from "react"
import Navbar from "@/components/Navbar"
import Home from "./Home"
import Image from "next/image"
import homeimg from "./images/home.jpg"

const HomePage: React.FC = () => {
    return (
        <div className="px-5 max-w-[1280px] mx-auto h-screen">
            <Navbar />
            <div className="flex h-full">
                <div className="left-content w-full md:w-1/2 p-2 flex-col justify-center items-center h-full">
                    <h1 className="text-4xl font-extrabold text-center">
                        <span className="text-pink-700"> elevate </span> your wardrobe
                    </h1>
                    <p className="text-gray-400">
                        At Vibe Wear, we believe that fashion is more than just clothing; it's a way
                        to express your unique personality and style. Our mission is to provide you
                        with a diverse range of high-quality, trendy, and affordable fashion items
                        that cater to every occasion and taste.
                    </p>

                    <button className="bg-black-400">Shop now</button>
                </div>
                <div className="right-content w-full md:w-1/2 p-2 flex justify-center items-center h-full">
                    <Image src={homeimg} alt="home-img" className="object-cover h-full" />
                </div>
            </div>
        </div>
    )
}

export default HomePage
