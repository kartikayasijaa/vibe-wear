const axios = require("axios")
const { colors, sizes, stores, styles } = require("..//constants//populateDB")
const { PrismaClient } = require("@prisma/client")

const client = new PrismaClient()

const fetchRandomUsers = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        )
        const users = await response.data.data.data
        const usersResponse = await users.map((user) => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            password: user.login.password,
        }))
        return usersResponse
    } catch (error) {
        console.error("Error fetching random users:", error.message)
        throw error
    }
}

const fetchRandomProducts = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20&inc=title%2Cdescription%2Ccategory%2Cstock%2Cprice%2Cimages&query=fashion",
        )
        const products = await response.data.data.data
        const allUsers = await client.user.findMany({
            select: {
                id: true,
            },
        })
        const productsResponse = await products.map((product) => {
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
                images: product.images[0],
                userId: randomUserId,
            }
        })
        return productsResponse
    } catch (error) {
        console.error("Error fetching random products:", error.message)
        throw error
    }
}

const seed = async () => {
    try {
        const usersResponse = await fetchRandomUsers()
        await client.user.createMany({
            data: usersResponse,
        })

        const productsResponse = await fetchRandomProducts()
        await client.product.createMany({
            data: productsResponse,
        })

        console.log("Seeding completed ✅.")
    } catch (error) {
        console.error("🚫 Error seeding data:", error)
    }
}

seed()
