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
            name: "John Casey",
            rating: 5,
            text: "Felicity was superb! We had 2 lessons before our wedding and have gone from totally unprepared to feeling super confident and very prepared!! Thanks so much Felicity for helping us out!! Really friendly and a lot of fun too!! 5*****"
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
                    <div
                        className="p-4 bg-white rounded-lg shadow-lg mx-auto w-full max-w-[100%] md:max-w-3xl lg:max-w-[85%]"
                        style={{
                            height: '420px', // Increased height for mobile
                            maxHeight: '270px', // Set max height for desktop
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <h3 className="text-xl font-bold mb-2 text-left">
                            {reviews[currentIndex].name}
                        </h3>
                        <div className="flex items-center mb-2 justify-start">
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
                        <p className="text-base text-left">{reviews[currentIndex].text}</p> {/* Fixed font size */}
                    </div>
                </div>

                {/* Thinner buttons, positioned outside the review box */}
                {showButtons && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center px-4 transition-opacity duration-300">
                        <button
                            onClick={handlePrev}
                            className="h-full w-3 sm:w-4 md:w-4 text-black flex items-center justify-center bg-transparent hover:bg-transparent"
                            style={{ zIndex: 30, marginLeft: '-15px' }} // Adjusted margin for mobile
                        >
                            ❮
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-full w-3 sm:w-4 md:w-4 text-black flex items-center justify-center bg-transparent hover:bg-transparent"
                            style={{ zIndex: 30, marginRight: '-15px' }} // Adjusted margin for mobile
                        >
                            ❯
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
