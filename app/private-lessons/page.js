// app/private-lessons/page.js
import ContactUs from '../../components/ContactUs'; // Import the ContactUs component

export default function PrivateLessons() {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Header Section with Image and Text Divider */}
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Private Lessons</h1>
                    <p className="text-lg mb-4">
                        Our private lessons are designed to meet your unique needs and skill level. Whether you're a beginner or an experienced dancer, enjoy personalized, one-on-one attention from our professional dance instructors.
                    </p>
                    <p className="text-lg mb-6">
                        Private lessons offer the perfect opportunity to refine your technique, learn new steps, or explore a different dance style in a focused and supportive environment.
                    </p>
                    <h2 className="text-3xl font-bold mb-6">Explore Different Dance Styles</h2>
                    <p className="text-lg mb-4">
                        We offer private lessons in a variety of dance styles to suit your preferences:
                    </p>
                    <ul className="list-disc pl-6 text-lg mb-4">
                        <li className="mb-2"><strong>Latin:</strong> Salsa, Cha-Cha, Rumba, and more.</li>
                        <li className="mb-2"><strong>Ballroom:</strong> Waltz, Foxtrot, Tango, and more.</li>
                        <li className="mb-2">
                            <strong>Scottish Dance:</strong> Gay Gordons, Ceilidh, Highland Dance, and others.
                        </li>
                    </ul>
                    <p className="text-lg">
                        Whether you want to master a particular style or explore a variety of dances, our instructors will guide you every step of the way.
                    </p>
                </div>
                <img
                    src="/images/private_lessons.jpg"
                    alt="Private Lessons"
                    className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 shadow-lg md:ml-10"
                />
            </div>

            {/* Contact Us Section */}
            <ContactUs /> {/* Use the ContactUs component */}
        </div>
    );
}
