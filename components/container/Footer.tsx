import React from "react"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer: React.FC = () => {
    return (
        <footer className="bg-pink-700 text-white p-10 mt-10">
            <div className="max-w-[1280px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>Address</p>
                        <p>New Delhi</p>
                        <p>Email: support@vibewear.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-gray-400" />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTwitter className="hover:text-gray-400" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram className="hover:text-gray-400" />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedinIn className="hover:text-gray-400" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-white">© 2024 Vibe Wear. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
