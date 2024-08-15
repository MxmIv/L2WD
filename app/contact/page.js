// app/contact/page.js

import ContactUs from '../../components/ContactUs'; // Adjust the import path as needed

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-lg mb-6">
                We would love to hear from you! Whether you have questions about our wedding dance lessons, private lessons, hen parties, or anything else, our team is ready to answer all your questions.
            </p>

            {/* Reusing the ContactUs component */}
            <ContactUs />

            {/* Additional Contact Information */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Our Studio</h2>
                <p className="text-lg mb-4">
                    Our studio is located in the south of Edinburgh, only 20 minutes by bus from the city center. With plenty of on-street parking, arriving by car is also convenient.
                </p>
                <p className="text-lg font-semibold mb-4">
                    Learn 2 Wedding Dance Studio<br />
                    132 Captains Road, Edinburgh EH17 8DU
                </p>

                <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
                <p className="text-lg">
                    Monday - Friday: 10:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                </p>
            </div>
        </div>
    );
}
