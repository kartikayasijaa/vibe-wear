import React from "react"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import men from "./images/men.jpg"
import women from "./images/women.jpg"
import homeimg from "./images/design.jpg"
import Footer from "@/components/container/Footer"
import Link from "next/link"
import "./home.css"

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow px-5 max-w-[1280px] mx-auto overflow-y-auto">
                <div className="flex h-full">
                    <div className="left-content w-full md:w-1/2 p-2 flex flex-col justify-center items-center">
                        <h1 className="font-extrabold text-center text-4xl sm:text-4xl md:text-6xl">
                            <span className="text-pink-700 cursive"> elevate </span> your wardrobe
                        </h1>
                        <p className="text-gray-400 mt-4 text-center">
                            At Vibe Wear, we believe that fashion is more than just clothing; it's a
                            way to express your unique personality and style.
                        </p>
                        <Link href="/shop">
                            <div className="bg-slate-950 text-sm text-white w-28 text-center py-1 px-2 mt-4 rounded-xl ">
                                Shop now
                            </div>
                        </Link>
                    </div>
                    <div className="right-content w-full md:w-1/2 p-2 flex justify-center items-center">
                        <Image
                            src={homeimg}
                            alt="home-img"
                            className="object-cover h-[500px]"
                            // width={600}
                            // height={200}
                        />
                    </div>
                </div>

                <div className="about p-5">
                    <h1 className="font-extrabold text-center text-2xl sm:text-lg md:text-2xl mt-5">
                        What We <span className="cursive text-pink-700">offer:</span>
                    </h1>
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="bg-white p-5 rounded-xl">
                            <h3 className="font-bold mb-3 text-center">Latest Trends</h3>
                            <p className="text-center ">
                                Stay ahead of the fashion curve with our handpicked selection of the
                                latest trends. Whether you're looking for chic casual wear, elegant
                                evening attire, or stylish accessories, we've got you covered.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl">
                            <h3 className="font-bold mb-3 text-center">High-Quality Products</h3>
                            <p className="text-center">
                                We are committed to offering products that meet the highest
                                standards of quality. From the fabrics we choose to the
                                craftsmanship of each piece, every item is designed to last and keep
                                you looking fabulous.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl">
                            <h3 className="font-bold mb-3 text-center">Easy Shopping Experience</h3>
                            <p className="text-center">
                                Enjoy a seamless shopping experience with our user-friendly website.
                                Browse through categories, filter by size, color, and style, and
                                find exactly what you need in just a few clicks.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl">
                            <h3 className="font-bold mb-3 text-center">
                                Secure Payment & Fast Shipping
                                <span className="line"></span>
                            </h3>
                            <p className="text-center">
                                Shop with confidence knowing that your payment information is
                                secure. We offer multiple payment options and ensure fast and
                                reliable shipping to get your items to you as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="category mt-10 pb-10">
                    <h1 className="font-extrabold text-center text-2xl sm:text-lg md:text-2xl mt-5 mb-5">
                        Shop by <span className="cursive text-pink-700"> category</span>
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
                            <Image
                                src={women}
                                alt="women-section"
                                className="object-cover w-full h-[300px] lg:h-[400px]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <Link
                                    href="/women"
                                    className="text-white text-3xl font-bold py-2 px-4 bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                                    Women
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2">
                            <Image
                                src={men}
                                alt="men-section"
                                className="object-cover w-full h-[300px] lg:h-[400px]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <Link
                                    href="/men"
                                    className="text-white text-3xl font-bold py-2 px-4 bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                                    Men
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage
