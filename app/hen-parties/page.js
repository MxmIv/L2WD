"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import ContactUs from '../../components/ContactUs'; // Import the ContactUs component

export default function HenParties() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-20"> {/* Adjusted padding to prevent hiding behind header */}
            <h1 className="text-4xl font-bold mb-6">Hen Parties</h1> {/* Updated to use Tailwind's font-bold */}
            <p className="text-lg font-regular mb-4">
                Make your hen party unforgettable with our fun and lively dance sessions. Choose from a variety of dance styles and get ready to have a blast!
            </p>
            <img src="/images/hen_parties.jpg" alt="Hen Party Dance" className="rounded-lg shadow-lg mb-6" />
            <p className="text-lg font-regular mb-4">
                Gather your friends and celebrate with a unique dance experience that will be the highlight of your hen party. No prior dance experience required!
            </p>

            {/* Customizable Options Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6">Customizable Options</h2> {/* Using font-bold */}
                <p className="text-lg font-regular mb-4">
                    We offer flexible packages that can be customized to suit the bride’s preferences. Whether you want to focus on a particular dance style, have a themed session, or plan specific activities, we can tailor the experience to make it truly special.
                </p>
                <p className="text-lg font-regular">
                    From the music to the dance moves, we’ll work with you to create the perfect hen party that reflects the bride’s personality and style. Just let us know your ideas, and we’ll bring them to life!
                </p>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6">FAQs</h2> {/* Using font-bold */}
                <div className="space-y-4">
                    {[
                        { question: "How far in advance should we book our hen party?", answer: "We recommend booking your hen party at least a month in advance to ensure availability and to allow enough time for any customizations." },
                        { question: "Can we customize the itinerary?", answer: "Absolutely! We offer a range of customizable options to fit your needs, whether it's the dance style, music, or specific activities you have in mind." },
                        { question: "What if we have a specific theme in mind?", answer: "We love themed parties! Whether it’s a vintage theme, disco, or something totally unique, we can tailor the dance session to match your theme perfectly." },
                        { question: "How can we pay?", answer: "Payments can be made via bank transfer or in cash. We require a deposit to secure your booking, with the balance due on the day of the event." }
                    ].map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-4 text-lg font-medium bg-white hover:bg-gray-100 focus:outline-none shadow-sm"
                            >
                                {faq.question}
                            </button>
                            {openFAQ === index && (
                                <div className="px-6 py-4 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <ContactUs /> {/* Use the ContactUs component */}
        </div>
    );
}
