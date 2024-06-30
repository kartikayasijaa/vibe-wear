import Link from "next/link"
import React from "react"
import Filter from "./Filter"
import Item from "./Item"
import Footer from "./Footer"

type Props = {}

const Container = (props: Props) => {
    return (
        <div>
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

            <Footer />
        </div>
    )
}

export default Container
