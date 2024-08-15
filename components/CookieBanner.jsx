"use client"; // This marks the component as a Client Component

import { useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [nonNecessaryEnabled, setNonNecessaryEnabled] = useState(true); // Default to enabled

    // Check for existing cookie consent
    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        const nonNecessary = localStorage.getItem('nonNecessaryEnabled') === 'true';
        if (cookieAccepted) {
            setNonNecessaryEnabled(nonNecessary);
        } else {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieAccepted', 'true');
        localStorage.setItem('nonNecessaryEnabled', nonNecessaryEnabled);
        setIsVisible(false);
        setShowSettings(false); // Close settings modal
    };

    const toggleNonNecessary = () => {
        setNonNecessaryEnabled(!nonNecessaryEnabled);
    };

    const closeSettings = () => {
        setShowSettings(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50">
                    <div className="flex items-center space-x-4">
                        <FaCookieBite className="text-[#693D14] w-6 h-6" />
                        <p className="text-sm">
                            We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept”, you consent to the use of ALL the cookies.
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={acceptCookies}
                            className="bg-[#693D14] hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition"
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => setShowSettings(true)}
                            className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded-md transition text-xs"
                        >
                            Cookie Settings
                        </button>
                    </div>
                </div>
            )}

            {/* Cookie Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Cookie Settings</h2>
                        <p className="text-sm mb-4">
                            This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. However, opting out of some of these cookies may affect your browsing experience.
                        </p>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold">Necessary</h3>
                            <p className="text-sm">Always Enabled</p>
                            <p className="text-sm mb-4">Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensure basic functionalities and security features of the website. These cookies do not store any personal information.</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold">Non-necessary</h3>
                            <p className="text-sm mb-2">These cookies help us analyze and understand how you use this website but are not essential for its functioning.</p>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={nonNecessaryEnabled}
                                    onChange={toggleNonNecessary}
                                    className="form-checkbox h-5 w-5 text-primary"
                                />
                                <span className="text-sm">Enable Non-necessary Cookies</span>
                            </label>
                        </div>

                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                onClick={closeSettings}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="bg-[#693D14] hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition"
                            >
                                Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
