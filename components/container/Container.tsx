import Link from "next/link"
import React from "react"
import Filter from "./Filter"
import Item from "./Item"
import Footer from "./Footer"

type Props = {}

const Container = (props: Props) => {
    return (
        <div className="mb-[200px]">
            <div className="flex ">
                <Link href="/filters" className="opacity-60">
                    <div>
                        <Filter />
                    </div>
                </Link>
                <div className="px-20">
                    <Item />
                </div>
            </div>
            <div className="mt-5">
                {" "}
                <Footer />
            </div>
        </div>
    )
}

export default Container
