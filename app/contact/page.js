// app/contact/page.js

import ContactUs from '../../components/ContactUs'; // Import the ContactUs component

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Reusing the ContactUs component */}
            <ContactUs />

            {/* Additional Contact Information */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Location of Our Studio</h2>
                <p className="text-lg mb-4">
                    Our studio is located in the south of Edinburgh, only 20 minutes by bus from the city center. With plenty of on-street parking, arriving by car is also convenient.
                </p>
                <p className="text-lg font-semibold mb-4 italic">
                    Learn 2 Wedding Dance Studio<br />
                    132 Captains Road, Edinburgh EH17 8DU
                </p>

                <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
                <p className="text-lg">
                    We are open every day of the week. Just get in touch to arrange your lesson at a time that suits you.
                </p>
            </div>
        </div>
    );
}
