"use client"; // Mark this component as a Client Component

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

export default function ReviewsComponent() {
    const reviews = [
        {
            name: "Alice Pelan",
            rating: 5,
            text: "Felicity was amazing and made our dream come true for our wedding day! We had 5 lessons and we loved how Felicity taught us and had so much fun with it as well. We were complete newbies but were doing lifts and death drops by the end of our sessions! I would definitely recommend Felicity if you want something special for your wedding day!"
        },
        {
            name: "Bradley John",
            rating: 5,
            text: "My wife Alex and I were so lucky to find Felicity as she put together our wedding dance routine which was fantastic! She was an excellent teacher especially as I have 2 left feet! We enjoyed our classes so much and couldn't have been happier. The dance on the wedding day was exactly how we imagined it would be so thank you so much! We couldn't recommend more to anyone thinking about a wedding dance, to get in touch with Felicity!"
        },
        {
            name: "John Casey",
            rating: 5,
            text: "Felicity was superb! We had 2 lessons before our wedding and have gone from totally unprepared to feeling super confident and very prepared!! Thanks so much Felicity for helping us out!! Really friendly and a lot of fun too!! 5*****"
        },
        {
            name: "Anita Dumitra",
            rating: 5,
            text: "We've recently got married and have practiced our wedding dance with Felicity. It's been a great experience every step of the way. We have enjoyed every class and even though we are fairly new into dancing. Felicity, with patience and great humour, has helped us and advised us so well that we have nailed it after a few hours practice. On the big day thanks to Felicity we felt confident enough to simply enjoy every moment of our dance. Ever grateful! 😊"
        },
        {
            name: "Sam A",
            rating: 5,
            text: "We can’t recommend Felicity enough. We have a wedding coming up very soon, and Felicity guided us through our first dance every step of the way, with skill, warmth, and humor. If you need help with your wedding dance, you won’t find better!"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(true);

    // Function to move to the next review
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    // Function to move to the previous review
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    // Toggle the visibility of the buttons (only on larger screens)
    const toggleButtons = () => {
        if (window.innerWidth >= 768) { // md breakpoint
            setShowButtons(!showButtons);
        }
    };

    // Timer for automatic review change every 10 seconds
    useEffect(() => {
        const timer = setInterval(handleNext, 10000); // 10000ms = 10 seconds
        return () => clearInterval(timer); // Cleanup the timer on unmount
    }, []);

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className="relative z-20" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons} {...handlers}>
            <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
            <div className="relative">
                <div className="carousel-item w-full">
                    <div className="p-4 bg-white rounded-lg shadow-lg mx-auto w-full md:max-w-3xl lg:max-w-4xl">
                        <h3 className="text-xl font-bold mb-2">
                            {reviews[currentIndex].name}
                        </h3>
                        <div className="flex items-center mb-2">
                            {Array.from({ length: reviews[currentIndex].rating }).map(
                                (_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-yellow-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 17.27l5.18 3.02-1.64-5.81 4.55-3.88-5.92-.51L12 2 9.83 10.09 3.91 10.6l4.55 3.88-1.64 5.81z"
                                        />
                                    </svg>
                                )
                            )}
                        </div>
                        <p className="text-base sm:text-sm">{reviews[currentIndex].text}</p> {/* Adjust font size for small screens */}
                    </div>
                </div>

                {/* Thinner buttons, positioned outside the review box */}
                {showButtons && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center px-4 transition-opacity duration-300">
                        <button
                            onClick={handlePrev}
                            className="h-full w-4 text-black flex items-center justify-center bg-transparent"
                            style={{ zIndex: 30 }} // Ensures buttons are on top
                        >
                            ❮
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-full w-4 text-black flex items-center justify-center bg-transparent"
                            style={{ zIndex: 30 }} // Ensures buttons are on top
                        >
                            ❯
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
