import { populate } from "@/scripts/populate"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        populate()
        return NextResponse.json({ message: "Processing"}, { status: 200 })
    } catch (err) {
        return NextResponse.error()
    }
}
