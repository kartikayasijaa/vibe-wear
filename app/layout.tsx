import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Provider from "@/components/Provider"
import NextTopLoader from "nextjs-toploader"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Vibe Wear",
    description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader color="#9333ea" />
                <Provider>
                    <Navbar />
                    {children}
                </Provider>
            </body>
        </html>
    )
}
