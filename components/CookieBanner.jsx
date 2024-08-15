"use client"; // This marks the component as a Client Component

import { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the cookie is already set
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (!cookieAccepted) {
            setIsVisible(true); // Show banner if the cookie is not set
        }
    }, []);

    const acceptCookies = () => {
        // Set cookie in localStorage for 30 days
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        localStorage.setItem('cookieAccepted', 'true');
        localStorage.setItem('cookieExpiration', expirationDate);

        setIsVisible(false); // Hide banner
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <FaCookieBite className="text-[#693D14] w-6 h-6" /> {/* Cookie icon with the hover color */}
                <p className="text-sm">
                    This website uses cookies to ensure you get the best experience on our website. In order to continue using our website, you need to accept cookies.
                </p>
            </div>
            <button
                onClick={acceptCookies}
                className="bg-[#693D14] hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition"
            >
                OK
            </button>
        </div>
    );
}
