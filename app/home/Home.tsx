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
                    <h1 className="font-extrabold text-center text-4xl sm:text-4xl md:text-6xl">
                        <span className="text-pink-700 cursive"> elevate </span> your wardrobe
                    </h1>
                    <p className="text-gray-400 mt-4 text-center">
                        At Vibe Wear, we believe that fashion is more than just clothing; it's a way
                        to express your unique personality and style.
                        {/* Our mission is to provide you
                        with a diverse range of high-quality, trendy, and affordable fashion items
                        that cater to every occasion and taste. */}
                    </p>

                    <Link href="/shop">
                        <div className="bg-slate-950 text-sm text-white w-28 text-center py-1 px-2 mt-4 rounded-xl ">
                            Shop now
                        </div>
                    </Link>
                </div>
                <div className="right-content w-full md:w-1/2 p-2 flex justify-center items-center h-full">
                    <Image src={homeimg} alt="home-img" className="object-cover h-full" />
                </div>
            </div>

            <div className="about h-full bg-pink-700 p-5 ">
                <h1 className="cursive text-white font-extrabold text-center text-2xl sm:text-lg md:text-2xl mt-5">
                    What We Offer:
                </h1>
                <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col ">
                    <div className="bg-white p-5 m-5 lg:m-0 rounded-xl">
                        <h3 className="font-bold  mb-5 text-center">Latest Trends</h3>
                        <p>
                            Stay ahead of the fashion curve with our handpicked selection of the
                            latest trends. Whether you're looking for chic casual wear, elegant
                            evening attire, or stylish accessories, we've got you covered.
                        </p>
                    </div>
                    <div className="bg-white p-5 m-5 lg:m-0 rounded-xl ">
                        <h3 className="font-bold  mb-5 text-center">High-Quality Products</h3>
                        <p>
                            We are committed to offering products that meet the highest standards of
                            quality. From the fabrics we choose to the craftsmanship of each piece,
                            every item is designed to last and keep you looking fabulous.
                        </p>
                    </div>
                    <div className="bg-white p-5 m-5 lg:m-0 rounded-xl">
                        <h3 className="font-bold  mb-5 text-center">Easy Shopping Experience</h3>
                        <p>
                            Enjoy a seamless shopping experience with our user-friendly website.
                            Browse through categories, filter by size, color, and style, and find
                            exactly what you need in just a few clicks.
                        </p>
                    </div>
                    <div className="bg-white p-5 m-5 lg:m-0 rounded-xl">
                        <h3 className="font-bold  mb-5 text-center">
                            Secure Payment & Fast Shipping
                        </h3>
                        <p>
                            Shop with confidence knowing that your payment information is secure. We
                            offer multiple payment options and ensure fast and reliable shipping to
                            get your items to you as quickly as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="category"></div>
        </div>
    )
}

export default HomePage
