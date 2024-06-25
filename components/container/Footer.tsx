import React from "react"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-[1280px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>123 Fashion Street</p>
                        <p>New York, NY 10001</p>
                        <p>Email: support@vibewear.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:underline">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-gray-400" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-gray-400" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram className="hover:text-gray-400" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedinIn className="hover:text-gray-400" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">© 2024 Vibe Wear. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
