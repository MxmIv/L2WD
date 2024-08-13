// app/hen-parties/page.js
export default function HenParties() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-6">Hen Parties</h1>
            <p className="text-lg mb-4">
                Make your hen party unforgettable with our fun and lively dance sessions. Choose from a variety of dance styles and get ready to have a blast!
            </p>
            <img src="/images/hen-party.jpg" alt="Hen Party Dance" className="rounded-lg shadow-lg mb-6" />
            <p className="mb-4">
                Gather your friends and celebrate with a unique dance experience that will be the highlight of your hen party. No prior dance experience required!
            </p>
            <button className="btn btn-primary">Book a Hen Party</button>
        </div>
    );
}
