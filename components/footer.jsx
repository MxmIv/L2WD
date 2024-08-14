import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="pt-10 pb-6 sm:pt-12 sm:pb-8" style={{ backgroundColor: '#313131' }}>
            <div className="container mx-auto px-4 text-center text-gray-200">
                {/* Address */}
                <p className="text-lg font-semibold mb-4">
                    132 Captains Road, Edinburgh EH17 8DU
                </p>

                {/* Get Directions Button */}
                <div className="mb-6">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=132+Captains+Road,+Edinburgh+EH17+8DU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition-colors duration-300"
                    >
                        <FaMapMarkerAlt className="mr-2" />
                        Get Directions
                    </a>
                </div>

                {/* Contact Details */}
                <div className="text-sm mb-4">
                    <p className="font-bold">Contact details</p>
                    <p>
                        Tel: <a href="tel:+447703483809" className="text-gray-100 hover:underline">+44 77034 83809</a><br />
                        E-mail: <a href="mailto:felicity@learn2weddingdance.co.uk" className="text-gray-100 hover:underline">felicity@learn2weddingdance.co.uk</a>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://www.facebook.com/WeddingDanceStudios" className="text-gray-300 hover:text-white" aria-label="Facebook">
                        <FaFacebookF className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.instagram.com/learn2weddingdance/" className="text-gray-300 hover:text-white" aria-label="Instagram">
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
