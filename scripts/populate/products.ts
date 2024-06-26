import axios from "axios"
import prisma from "@/app/prismadb"
import { colors, sizes, stores, styles } from "@/constants/populate"

type RandomProductsResponse = {
    title: string
    description: string
    category: string
    stock: number
    price: number
    images: string[]
}

const fetchRandomProducts = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20&inc=title%2Cdescription%2Ccategory%2Cstock%2Cprice%2Cimages&query=fashion",
        )
        if (!response.data) {
            throw new Error("No Products data found")
        }
        const allUsers = await prisma.user.findMany({
            select: {
                id: true,
            },
        })
        const products: RandomProductsResponse[] = await response?.data?.data?.data || []

        const productsResponse = products.map((product) => {
            const randomUserId = allUsers[Math.floor(Math.random() * allUsers.length)].id
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
            const randomStore = stores[Math.floor(Math.random() * stores.length)]
            const randomStyle = styles[Math.floor(Math.random() * styles.length)]
            return {
                title: product.title,
                description: product.description,
                category: product.category,
                style: randomStyle,
                store: randomStore,
                size: randomSize,
                inventory: product.stock,
                color: randomColor,
                price: product.price,
                images: product?.images[0] || "",
                userId: randomUserId,
            }
        })
        return productsResponse
    } catch (error: any) {
        console.error("Error fetching random products:", error.message)
        throw error
    }
}

export const populateProducts = async () => {
    try {
        const products = await fetchRandomProducts()
        const createdProducts = await prisma.product.createMany({
            data: products,
        })
        return createdProducts
    } catch (error: any) {
        console.error("Error creating products:", error.message)
        throw error
    }
}