import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import CookieBanner from '../components/CookieBanner';
import Head from 'next/head';

export const metadata = {
    title: {
        template: 'Learn 2 Wedding Dance',
        default: 'Learn 2 Wedding Dance | Hen Parties',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <Head>
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
                <meta
                    property="og:title"
                    content="Learn to Wedding Dance | Professional Wedding Dance Lessons"
                />
                <meta
                    property="og:description"
                    content="Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable."
                />
                <meta property="og:image" content="/images/og-image.jpg" /> {/* Update this with the correct path to your image */}
                <meta property="og:url" content="https://www.learn2weddingdance.co.uk/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Learn to Wedding Dance | Professional Wedding Dance Lessons" />
                <meta name="twitter:description" content="Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable." />
                <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Update this with the correct path to your image */}
                <title>Learn to Wedding Dance | Professional Wedding Dance Lessons</title>
            </Head>
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
