import prisma from "@/app/prismadb"
import axios from "axios"
import bcrypt from "bcrypt"

type RandomUserResponse = {
    name: {
        title: string
        first: string
        last: string
    }
    email: string
    password: string
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    login: {
        username: string
        password: string
    }
}

const fetchUsers = async () => {
    try {
        const response = await axios.get(
            "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        )
        if (!response.data) {
            throw new Error("No data found")
        }
        const usersResponse: RandomUserResponse[] = response?.data?.data?.data

        const userArr = await Promise.all(
            usersResponse.map(async (user) => ({
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                password: await bcrypt.hash(user.login.password, 12)
            })),
        )

        return userArr
    } catch (error: any) {
        console.error("Error fetching random users:", error.message)
        throw error
    }
}

export const populateUsers = async () => {
    try {
        const users = await fetchUsers()
        const createdUsers = await prisma.user.createMany({
            data: users,
        })
        return createdUsers
    } catch (error: any) {
        console.error("Error creating users:", error.message)
        throw error
    }
}
