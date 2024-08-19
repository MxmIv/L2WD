import ContactUs from '../../components/ContactUs'; // Import the ContactUs component

export default function OtherLessons() {
    return (
        <div className="container mx-auto px-4 py-20"> {/* Increased top padding to prevent header overlap */}
            {/* Header Section with Image and Text Divider */}
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Other Lessons</h1> {/* Updated to "Other Lessons" */}
                    <p className="text-lg font-regular mb-4">
                        Whether you&apos;re a beginner or an experienced dancer, our private lessons provide personalised, one-on-one attention from professional dance instructors.
                    </p>
                    <p className="text-lg font-regular mb-6">
                        Private dance lessons offer the ideal opportunity to refine your technique, learn new steps, or explore different dance styles in a focused and supportive environment.
                    </p>
                    <h2 className="text-3xl font-bold mb-6">Explore Different Dance Styles</h2> {/* Updated to font-bold */}
                    <p className="text-lg font-regular mb-4">
                        We offer private lessons in a variety of dance styles to suit your preferences:
                    </p>
                    <ul className="list-disc pl-6 text-lg font-regular mb-4">
                        <li className="mb-2"><strong>Latin:</strong> Salsa, Cha-Cha, Rumba, and more.</li>
                        <li className="mb-2"><strong>Ballroom:</strong> Waltz, Foxtrot, Tango, and more.</li>
                        <li className="mb-2">
                            <strong>Scottish Dance:</strong> Gay Gordons, Ceilidh, Highland Dance, and others.
                        </li>
                    </ul>
                    <p className="text-lg font-regular">
                        Whether you want to master a specific style or explore a variety of dances, our instructors will guide you every step of the way.
                    </p>
                </div>
                <img
                    src="/images/private_lessons.jpg"
                    alt="Private Lessons"
                    className="w-full md:w-auto rounded-lg mb-6 md:mb-0 shadow-lg md:ml-10 max-h-[600px] max-w-[400px] object-cover" // Adjusted for portrait orientation
                />
            </div>

            {/* Contact Us Section */}
            <ContactUs /> {/* Use the ContactUs component */}
        </div>
    );
}
