// app/page.js
export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-5xl font-bold mb-6">Learn to Dance for Your Wedding</h1>
            <p className="text-lg mb-4">
                Get ready to impress your guests with the perfect first dance. We offer personalized wedding dance lessons, private sessions, and fun hen party dance classes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Wedding Dance Lessons</h2>
                    <p>Prepare for your big day with confidence.</p>
                    <a href="/wedding-dance-lessons" className="btn btn-primary mt-4">Learn More</a>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Private Lessons</h2>
                    <p>Personalized one-on-one sessions.</p>
                    <a href="/private-lessons" className="btn btn-primary mt-4">Learn More</a>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Hen Parties</h2>
                    <p>Make your hen party unforgettable with dance.</p>
                    <a href="/hen-parties" className="btn btn-primary mt-4">Learn More</a>
                </div>
            </div>
        </div>
    );
}
