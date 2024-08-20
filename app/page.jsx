export default function HomePage() {
    return (
        <div>
            {/* Full-width Image Section with Title */}
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/landing_page.jpg')` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl sm:text-6xl font-medium text-white text-center">
                        Welcome to Learn To Wedding Dance
                    </h1>
                </div>
            </section>

            {/* Rest of your landing page content goes here */}
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold mb-6">What we offer</h2>
                <p className="text-lg font-regular mb-4">
                    At Learn to Wedding Dance, we offer personalised one-to-one dance lessons and group sessions,
                    specifically tailored for couples preparing for their First Wedding Dance. Our classes are held at
                    the L2WD Studio in Edinburgh.
                </p>
                <p className="text-lg font-regular mb-4">
                    Whether you’re seasoned dancers or complete beginners, seeking a fully choreographed routine or simply
                    the confidence to navigate the dance floor without tripping over each other — we’ve got you covered.
                </p>
                <p className="text-lg font-regular mb-4">
                    No matter your needs, we’ll guide you step by step, building your confidence so you look and
                    feel fantastic on the dance floor. By the end of your lessons, you’ll be fully prepared for that
                    unforgettable moment when you share your first dance as a married couple.
                </p>
                {/* Add more sections or components as needed */}
            </div>
        </div>
    );
}
