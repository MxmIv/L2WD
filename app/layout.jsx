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
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://cheery-unicorn-1781e4.netlify.app/',
        title: 'Learn to Wedding Dance | Professional Wedding Dance Lessons',
        description: 'Personalized wedding dance lessons in Edinburgh. Learn from an award-winning choreographer to make your first dance unforgettable.',
        images: [
            {
                url: 'https://cheery-unicorn-1781e4.netlify.app/images/og-image.png',
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
        image: 'https://cheery-unicorn-1781e4.netlify.app/images/og-image.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/L2WD_logo.svg" sizes="any" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            <title>{metadata.title.default}</title>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXE6NMYXM8"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-HXE6NMYXM8');
                        `,
                }}
            />
        </head>
        <body className="antialiased text-gray-900 bg-white pt-20">
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
