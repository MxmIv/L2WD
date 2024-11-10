'use client';

import { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setError(null);

        // Client-side validation for email or phone
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const phone = formData.get("phone");

        if (!email && !phone) {
            setError("Please provide either an email or a phone number.");
            return;
        }

        // Proceed with form submission
        setStatus('pending');

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then((response) => {
                if (response.ok) {
                    setStatus('ok');
                    event.target.reset(); // Reset form fields after submission
                } else {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            })
            .catch((e) => {
                setStatus('error');
                setError(e.message || "An error occurred. Please try again.");
            });
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Us Using Form</h2>
            <p className="text-lg font-regular mb-4">
                Have any questions or want to book a session? Feel free to reach out to us!
            </p>
            <form
                name="feedback"
                method="POST"
                data-netlify="true"
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-4"
            >
                <input type="hidden" name="form-name" value="feedback" />

                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email (required if no phone)"
                    className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone (required if no email)"
                    className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    rows="4"
                ></textarea>

                <button
                    type="submit"
                    className="bg-gray-700 text-white py-3 rounded-md hover:bg-opacity-90 transition"
                    disabled={status === 'pending'}
                >
                    Submit
                </button>
            </form>

            {/* Confirmation and Error Messages */}
            {status === 'ok' && (
                <div className="flex items-center text-green-600 mt-4">
                    <FaCheckCircle className="mr-2" /> Submitted!
                </div>
            )}
            {status === 'error' && (
                <div className="flex items-center text-red-600 mt-4">
                    <FaExclamationTriangle className="mr-2" /> {error}
                </div>
            )}
        </div>
    );
}
