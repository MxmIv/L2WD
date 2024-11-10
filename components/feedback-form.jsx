"use client";

import { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [fieldError, setFieldError] = useState({ email: false, phone: false });

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const phone = formData.get("phone");

        // Client-side validation for email or phone
        if (!email && !phone) {
            setFieldError({ email: true, phone: true });
            setError("Please provide either an email or a phone number.");
            return;
        }

        setFieldError({ email: false, phone: false });
        setStatus('pending');

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => {
                setStatus('ok');
                event.target.reset(); // Reset form fields after submission
                console.log("Form successfully submitted");
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
                name="feedback" // Ensure form name matches __forms.html
                method="post"
                data-netlify="true" // Netlify form detection attribute
                netlify-honeypot="bot-field" // Honeypot field
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <input type="hidden" name="form-name" value="feedback" />
                <input type="hidden" name="bot-field" />

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
                    className={`py-3 px-4 rounded-md border ${fieldError.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${fieldError.email ? 'focus:ring-red-500' : 'focus:ring-gray-700'}`}
                />
                {fieldError.email && <p className="text-red-500 text-sm">Please enter an email or phone number.</p>}

                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone (required if no email)"
                    className={`py-3 px-4 rounded-md border ${fieldError.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${fieldError.phone ? 'focus:ring-red-500' : 'focus:ring-gray-700'}`}
                />
                {fieldError.phone && <p className="text-red-500 text-sm">Please enter a phone number or email.</p>}

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
