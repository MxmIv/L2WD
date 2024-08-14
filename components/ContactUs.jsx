import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function ContactUs() {
    return (
        <div className="p-6 bg-gray-100 rounded-lg mb-10">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="mb-4">
                <a href="https://wa.me/07703483809" target="_blank" className="btn btn-success w-full flex items-center justify-center">
                    <FaWhatsapp className="mr-2" size={24} />
                    Chat with us on WhatsApp
                </a>
            </div>
            <div>
                <a href="tel:07703483809" className="btn btn-primary w-full flex items-center justify-center">
                    <FaPhone className="mr-2" size={24} />
                    Call Us: 077034 83809
                </a>
            </div>
        </div>
    );
}
