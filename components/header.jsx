"use client"; // This marks the component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const logo = '/L2WD_logo.svg'; // Correct path to the logo

const navItems = [
    { linkText: 'Wedding Dance Lessons', href: '/wedding-dance-lessons' },
    { linkText: 'Other Lessons', href: '/other-lessons' },
    { linkText: 'Hen Parties', href: '/hen-parties' },
    { linkText: 'About Us', href: '/about' }, // Add About Us page link here
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const menuRef = useRef(null);
    const prevScrollY = useRef(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
            setIsVisible(false);
        } else if (currentScrollY < prevScrollY.current) {
            setIsVisible(true);
        }
        prevScrollY.current = currentScrollY;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white fixed w-full z-50 top-0 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="L2WD logo" width={100} height={100} /> {/* Updated size */}
                </Link>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 5h16M4 12h16M4 19h16"}
                            />
                        </svg>
                    </button>
                </div>

                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 w-64 bg-white transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:items-center md:w-auto md:space-x-6`}
                >
                    <ul className="flex flex-col h-full p-6 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex-grow">
                                <Link href={item.href} onClick={closeMenu} className="block text-center text-gray-700 hover:text-customBrown no-underline py-2">
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
