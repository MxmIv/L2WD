"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import ContactUs from '../../components/ContactUs'; // Import the ContactUs component

export default function WeddingDanceLessons() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-20">
            {/* Header Section with Image and Text Divider */}
            <div className="flex flex-col md:flex-row items-center mb-10">
                <img
                    src="/images/Wedding-classes-compressed.jpg"
                    alt="Wedding Dance"
                    className="w-full md:w-auto rounded-lg mb-6 md:mb-0 shadow-lg md:ml-10 max-h-[600px] max-w-[400px] object-cover" // Optimized for portrait orientation
                />
                <div className="md:ml-10 w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Wedding Dance Lessons</h1>
                    <p className="text-lg font-regular mb-4">
                        Your wedding day is one of the most memorable moments of your life, and the first dance is a cherished tradition that reflects your love story. Whether you&apos;re a complete beginner or looking to refine your dance skills, our wedding dance lessons are tailored to ensure that your first dance is as special as the rest of your day.
                    </p>
                    <p className="text-lg font-regular mb-4">
                        Learn to dance with confidence on your big day. Our wedding dance lessons are specifically designed to help you and your partner create a magical first dance that suits your style and personality. From choosing the right song to mastering the steps, we guide you through each stage of the process, ensuring that you feel comfortable and confident on the dance floor.
                    </p>
                    <ul className="list-disc pl-6 text-lg font-regular">
                        <li className="mb-2">Personalized Instruction</li>
                        <li className="mb-2">Flexible Scheduling</li>
                        <li className="mb-2">Supportive Environment</li>
                        <li className="mb-2">Choreography to Suit You</li>
                        <li className="mb-2">Practice Makes Perfect</li>
                        <li>Memorable Experience</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-8">First Dance Packages</h2>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Package 1 */}
                <div className="p-6 border rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-2">1 hour Wedding Dance Package - £80</h3>
                    <p>This is usually for couples who are coming from abroad to the UK to get married and arrive just a week before their big day. Also, couples who have left it to the last minute to prepare, usually the week before.</p>
                </div>

                {/* Package 2 */}
                <div className="p-6 border rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-2">2 hour Wedding Dance Package - £120</h3>
                    <p>Our 2 x 1 hour Wedding Dance Package is for couples who want to learn a very basic first dance. This means holding each other properly, learning some basic footwork (perhaps the basic steps from a foxtrot or waltz).</p>
                </div>

                {/* Package 3 */}
                <div className="p-6 border rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-2">3 hour Wedding Dance Package - £150</h3>
                    <p>The 3 x 1 hour Wedding Dance Package is our most popular choice as most couples learn their routine in this time. Spend more time learning a particular dance style or have a unique First Dance choreographed to your special song.</p>
                </div>

                {/* Package 4 */}
                <div className="p-6 border rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-2">4 hour Wedding Dance Package - £200</h3>
                    <p>This package is recommended for couples looking for a full choreographed routine who might not have much time to practice at home. It helps polish off your dance to perfection, making it look smooth and natural.</p>
                </div>

                {/* Package 5 */}
                <div className="p-6 border rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-2">5 hour Wedding Dance Package - £250</h3>
                    <p>This package is perfect if you aren’t confident on the dance floor and need extra guidance. It provides plenty of tuition time to learn your steps and polish your dance to perfection.</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6">FAQs</h2>
                <div className="space-y-4">
                    {[
                        {
                            question: "What Will Our First Dance Look Like?",
                            answer: (
                                <div>
                                    <p className="font-bold">Tailored to You</p>
                                    <p>Your first dance will be tailored to match your style, song choice, and comfort level. Whether you dream of recreating the iconic Dirty Dancing scene or want to impress your guests with a graceful waltz, we’ll make sure it reflects your unique personalities.</p>
                                    <br />
                                    <p className="font-bold">Custom Choreography</p>
                                    <p>We can choreograph a dance specifically for you and your chosen song, making the learning process more enjoyable. Instead of memorising complex steps, you’ll dance just as you envisioned. We’ll discuss your ideas and vision, then create a routine together in a fun and relaxed environment.</p>
                                </div>
                            )
                        },
                        { question: "What Should I Bring to My Lesson?", answer: "Please bring comfortable shoes and wear something you can move freely in. A bottle of water is also recommended." },
                        { question: "How to choose a song?", answer: "Choose a song that resonates with both of you. It could be a song with a special meaning or one that you both love." },
                        { question: "How Can I Pay for Lessons?", answer: "Payments can be made via bank transfer or in cash before the lesson begins." },
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
