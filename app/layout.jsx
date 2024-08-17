import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
    title: {
        template: 'Learn 2 Wedding Dance',
        default: 'Learn 2 Wedding Dance | Hen Parties',
    },
    description: 'Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable.',
    keywords: 'Wedding dance lessons, Edinburgh, First dance, Choreographer, Dance studio',
    author: 'Learn 2 Wedding Dance',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://cheery-unicorn-1781e4.netlify.app/',
        title: 'Learn to Wedding Dance | Professional Wedding Dance Lessons',
        description: 'Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable.',
        images: [
            {
                url: 'https://cheery-unicorn-1781e4.netlify.app/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Wedding Dance Lessons',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Learn to Wedding Dance | Professional Wedding Dance Lessons',
        description: 'Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable.',
        image: 'https://cheery-unicorn-1781e4.netlify.app/images/og-image.jpg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* Favicon */}
            <link rel="icon" href="/L2WD_logo.svg" sizes="any" />

            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                rel="stylesheet"
            />

            {/* SEO Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable."
            />
            <meta
                name="keywords"
                content="Wedding dance lessons, Edinburgh, First dance, Choreographer, Dance studio"
            />
            <meta name="author" content="Learn 2 Wedding Dance" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph Tags */}
            <meta
                property="og:title"
                content="Learn to Wedding Dance | Professional Wedding Dance Lessons"
            />
            <meta
                property="og:description"
                content="Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable."
            />
            <meta property="og:image" content="https://cheery-unicorn-1781e4.netlify.app/images/og-image.jpg" /> {/* Update this with the correct path to your image */}
            <meta property="og:url" content="https://cheery-unicorn-1781e4.netlify.app/" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Learn to Wedding Dance | Professional Wedding Dance Lessons" />
            <meta name="twitter:description" content="Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable." />
            <meta name="twitter:image" content="https://cheery-unicorn-1781e4.netlify.app/images/og-image.jpg" /> {/* Update this with the correct path to your image */}

            <title>Learn to Wedding Dance | Professional Wedding Dance Lessons</title>
        </head>
        <body className="antialiased text-gray-900 bg-white pt-20"> {/* Adjusted top padding */}
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieBanner />
        </div>
        </body>
        </html>
    );
}
