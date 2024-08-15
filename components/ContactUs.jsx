"use client"; // Mark this component as a Client Component

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2> {/* Updated to font-bold */}
            <p className="text-lg font-regular mb-4">
                Have any questions or want to book a session? Feel free to reach out to us!
            </p>
            <div className="flex flex-col space-y-4">
                <a href="tel:+447703483809" className="flex items-center justify-center bg-gray-700 text-white py-3 rounded-md hover:bg-gray-700 transition">
                    <FaPhoneAlt className="mr-2" /> Call Us
                </a>
                <a href="https://wa.me/447703483809" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] text-white py-3 rounded-md hover:bg-opacity-90 transition">
                    <FaWhatsapp className="mr-2" /> WhatsApp Us
                </a>
            </div>
        </div>
    );
}
