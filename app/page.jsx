export default function HomePage() {
    return (
        <div>
            {/* Full-width Image Section with Title */}
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/wedding-dance.jpg')` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white text-center">
                        Learn to Dance for Your Wedding
                    </h1>
                </div>
            </section>

            {/* Rest of your landing page content goes here */}
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <p className="text-lg mb-4">
                    We offer a range of services to help you prepare for your special day. Whether youre looking for
                    wedding dance lessons, private lessons, or fun hen parties, we have you covered.
                </p>
                {/* Add more sections or components as needed */}
            </div>
        </div>
    );
}
