const axios = require("axios")
const { PrismaClient } = require("@prisma/client")
const client = new PrismaClient()

const fetchRandomUsers = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        )
        return response.data.data
    } catch (error) {
        console.error("Error fetching random users:", error.message)
        throw error
    }
}

const fetchRandomProducts = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=title%2Cdescription%2Ccategory%2Cstock%2Cprice%2Cimages&query=fashion",
        )
        return response.data.data
    } catch (error) {
        console.error("Error fetching random products:", error.message)
        throw error
    }
}

const seed = async () => {
    try {
        const usersResponse = await fetchRandomUsers()
        const productsResponse = await fetchRandomProducts()

        const users = usersResponse.data
        const products = productsResponse.data

        // Insert users
        for (const user of users) {
            await client.user.create({
                data: {
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    password: user.login.password,
                },
            })
        }

        // Fetch all user IDs from the database
        const allUsers = await client.user.findMany({
            select: {
                id: true,
            },
        })

        const userIds = allUsers.map((user) => user.id)

        const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
        const sizes = ["XS", "S", "M", "L", "XL"]
        const stores = [
            "Chic Boutique",
            "Style Avenue",
            "Glamour Attic",
            "Fashionista Finds",
            "Trendy Threads",
            "Couture Corner",
            "Elegant Edge",
            "Vogue Vault",
            "Dapper Den",
        ]
        const styles = [
            "A-line",
            "Shift",
            "Wrap",
            "Sheath",
            "Fit and Flare",
            "Maxi",
            "Midi",
            "Mini",
        ]

        // Insert products with random user IDs
        for (const product of products) {
            const randomUserId = userIds[Math.floor(Math.random() * userIds.length)]
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
            const randomStore = stores[Math.floor(Math.random() * stores.length)]
            const randomStyle = styles[Math.floor(Math.random() * styles.length)]

            await client.product.create({
                data: {
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
                },
            })
        }

        console.log("Seeding completed ✅.")
    } catch (error) {
        console.error("🚫 Error seeding data:", error)
    }
}

seed()
