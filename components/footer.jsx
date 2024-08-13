import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm mb-4">
                    Address: 123 Wedding Lane, Dance City, WD 45678
                </p>

                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://www.facebook.com/yourpage" className="text-gray-700 hover:text-primary" aria-label="Facebook">
                        <FaFacebookF className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.instagram.com/yourpage" className="text-gray-700 hover:text-primary" aria-label="Instagram">
                        <FaInstagram className="w-5 h-5" />
                    </Link>
                </div>

                <p className="text-sm">
                    VOWS Awards Winners: 2008, 2010, 2012, 2013, 2018
                </p>
            </div>
        </footer>
    );
}
