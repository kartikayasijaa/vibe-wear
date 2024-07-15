import { populateProducts } from "./products"
import { populateUsers } from "./users"

export const populate = async () => {
    try {
        await populateUsers()
        populateProducts()
    } catch (error) {
        console.error("🚫 Error seeding data:", error)
        throw error
    }
}
