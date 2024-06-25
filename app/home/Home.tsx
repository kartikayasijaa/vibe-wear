import React from "react"
import Navbar from "@/components/Navbar"
import "./home.css"
import Image from "next/image"
import homeimg from "./images/design.jpg"
import Link from "next/link"

const HomePage: React.FC = () => {
    return (
        <div className="px-5 max-w-[1280px] mx-auto h-screen">
            <Navbar />
            <div className="flex h-full">
                <div className="left-content w-full md:w-1/2 p-2 flex flex-col justify-center items-center h-full">
                    <h1 className="font-extrabold text-center text-4xl sm:text-6xl md:text-8xl">
                        <span className="text-pink-700"> elevate </span> your wardrobe
                    </h1>
                    <p className="text-gray-400 mt-4 text-center">
                        At Vibe Wear, we believe that fashion is more than just clothing; it's a way
                        to express your unique personality and style.
                        {/* Our mission is to provide you
                        with a diverse range of high-quality, trendy, and affordable fashion items
                        that cater to every occasion and taste. */}
                    </p>

                    <Link href="/shop">
                        <div className="bg-slate-950 text-sm text-white w-28 text-center py-1 px-2 mt-4 rounded-xl cursor-pointer">
                            Shop now
                        </div>
                    </Link>
                </div>
                <div className="right-content w-full md:w-1/2 p-2 flex justify-center items-center h-full">
                    <Image src={homeimg} alt="home-img" className="object-cover h-full" />
                </div>
            </div>

            <div className="about bg-pink-700"></div>
        </div>
    )
}

export default HomePage
