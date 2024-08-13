// app/wedding-dance-lessons/page.js
export default function WeddingDanceLessons() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-6">Wedding Dance Lessons</h1>
            <p className="text-lg mb-4">
                Learn to dance with confidence on your big day. Our wedding dance lessons are designed to help you and your partner create the perfect first dance.
            </p>
            <img src="/images/wedding-dance.jpg" alt="Wedding Dance" className="rounded-lg shadow-lg mb-6" />
            <p className="mb-4">
                Whether you're a complete beginner or looking to perfect your moves, our experienced instructors will guide you every step of the way.
            </p>
            <button className="btn btn-primary">Book a Lesson</button>
        </div>
    );
}
