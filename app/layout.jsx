import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
    title: {
        template: 'Learn 2 Wedding Dance',
        default: 'Learn 2 Wedding Dance | Personalized First Dance & Hen Parties in Edinburgh',
    },
    description: 'Personalized wedding dance lessons and Hen parties in Edinburgh. Learn from an award-winning choreographer to make your first dance and celebrations unforgettable.',
    keywords: 'Wedding dance lessons, Edinburgh, First dance, Hen Party, Choreographer, Dance studio, Personalized dance lessons, Professional dance instruction, Edinburgh hen parties',
    author: 'Learn 2 Wedding Dance',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://learn2weddingdance.co.uk',
        title: 'Learn to Wedding Dance | Professional & Personalized Dance Lessons | Hen Parties Edinburgh',
        description: 'Experience professional and personalized wedding dance lessons and hen party workshops in Edinburgh. Make your first dance and celebrations truly unique with guidance from an award-winning choreographer.',
        images: [
            {
                url: 'https://learn2weddingdance.co.uk/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Professional Wedding Dance Lessons and Hen Parties in Edinburgh',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Learn to Wedding Dance | Professional & Personalized Dance Lessons',
        description: 'Professional and personalized wedding dance lessons and hen party workshops in Edinburgh. Create lasting memories with expert guidance.',
        image: 'https://learn2weddingdance.co.uk/images/og-image.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/L2WD_logo.svg" sizes="any" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            <link rel="canonical" href="https://learn2weddingdance.co.uk" />
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
