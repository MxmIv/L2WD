import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: 'L2WD',
        default: 'Learn to Wedding Dance | Hen Parties'
    }
};

// app/layout.js or your main layout component
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/L2WD_logo.svg" sizes="any" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                  rel="stylesheet" />
        </head>
        <body className="antialiased text-gray-900 bg-white pt-20"> {/* Adjusted top padding */}
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
}

