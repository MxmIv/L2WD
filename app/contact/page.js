import ContactUs from '../../components/ContactUs';
import { FeedbackForm } from '../../components/feedback-form';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Inquiry Form */}
            <div className="mb-10">
                <FeedbackForm />
            </div>

            {/* Contact Us Component */}
            <ContactUs />

            {/* Additional Contact Information */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Location of Our Studio</h2>
                <p className="text-lg mb-4">
                    Our studio is located in the south of Edinburgh, only 20 minutes by bus from the city center. With plenty of on-street parking, arriving by car is also convenient.
                </p>

                <div className="">
                    <div className="text-lg font-semibold italic mb-4 md:mr-6">
                        <p>Learn 2 Wedding Dance Studio<br />
                            132 Captains Road, Edinburgh EH17 8DU</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.794862244891!2d-3.1636635228388528!3d55.90091687313938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b9dbc580abbb%3A0x85ba06ef10b59e6c!2sLearn%202%20Wedding%20Dance!5e0!3m2!1sen!2suk!4v1724180027060!5m2!1sen!2suk"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-64 sm:w-96 sm:h-72 md:w-[400px] md:h-[300px] rounded-lg shadow-lg"
                    ></iframe>
                </div>

                <h2 className="text-3xl font-bold mt-10 mb-4">Business Hours</h2>
                <p className="text-lg">
                    We are open every day of the week. Just get in touch to arrange your lesson at a time that suits you.
                </p>
            </div>
        </div>
    );
}
