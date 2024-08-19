import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="pt-10 pb-6 sm:pt-12 sm:pb-8" style={{ backgroundColor: '#313131' }}>
            <div className="container mx-auto px-4 text-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Sitemap Links */}
                    <div className="order-2 sm:order-1 mb-6 sm:mb-0 sm:w-1/2 text-center sm:text-left">
                        <div className="flex flex-col space-y-2 text-lg"> {/* Reduced spacing between items */}
                            <Link href="/wedding-dance-lessons" className="hover:text-white">
                                Wedding Dance Lessons
                            </Link>
                            <Link href="/other-lessons" className="hover:text-white">
                                Other Lessons
                            </Link>
                            <Link href="/hen-parties" className="hover:text-white">
                                Hen Parties
                            </Link>
                            <Link href="/about" className="hover:text-white">
                                About Us
                            </Link>
                            <Link href="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social Media and Location Icons */}
                    <div className="order-1 sm:order-2 sm:w-1/2 text-center">
                        <div className="flex justify-center space-x-6 mb-6"> {/* Centered icons */}
                            <Link href="https://www.facebook.com/WeddingDanceStudios" className="text-gray-300 hover:text-white" aria-label="Facebook">
                                <FaFacebookF className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/learn2weddingdance/" className="text-gray-300 hover:text-white" aria-label="Instagram">
                                <FaInstagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.google.com/maps/place/Learn+2+Wedding+Dance/@55.9008161,-3.1612074,20z/data=!4m15!1m8!3m7!1s0x4887b8ac29dcbf5d:0xc7dc3c26d0d732b4!2s132+Captain's+Rd,+Edinburgh+EH17+8DU!3b1!8m2!3d55.9009003!4d-3.1610854!16s%2Fg%2F11bw3h_978!3m5!1s0x4887b9dbc580abbb:0x85ba06ef10b59e6c!8m2!3d55.9009169!4d-3.1610886!16s%2Fg%2F11v9cdrwyd?entry=ttu" className="text-gray-300 hover:text-white" aria-label="View Location" target="_blank" rel="noopener noreferrer">
                                <FaMapMarkerAlt className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Studio Address and Contact Details */}
                    <div className="order-3 sm:w-1/2 text-center sm:text-right">
                        {/* Studio Address */}
                        <p className="text-lg font-semibold mb-4">
                            Learn 2 Wedding Dance Studio<br />
                            132 Captains Road, Edinburgh EH17 8DU
                        </p>

                        {/* Contact Details */}
                        <div className="text-sm mb-4">
                            <p className="font-bold">Contact details</p>
                            <p>
                                Tel: <a href="tel:+447703483809" className="text-gray-100 hover:underline">+44 77034 83809</a><br />
                                E-mail: <a href="mailto:felicity@learn2weddingdance.co.uk" className="text-gray-100 hover:underline">felicity@learn2weddingdance.co.uk</a>
                            </p>
                        </div>

                        <p className="text-sm">
                            VOWS Awards Winners: 2008, 2010, 2012, 2013, 2018
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
