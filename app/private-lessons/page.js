// app/private-lessons/page.js
export default function PrivateLessons() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-6">Private Lessons</h1>
            <p className="text-lg mb-4">
                Our private lessons are tailored to your needs and skill level. Enjoy one-on-one attention from our professional dance instructors.
            </p>
            <img src="/images/private-lessons.jpg" alt="Private Lessons" className="rounded-lg shadow-lg mb-6" />
            <p className="mb-4">
                Whether you want to refine your technique or learn a new dance style, our private lessons offer the flexibility and personalized approach you need.
            </p>
            <button className="btn btn-primary">Book a Private Lesson</button>
        </div>
    );
}

