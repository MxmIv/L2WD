import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/github-mark-white.svg'; // Update with your logo

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Wedding Dance Lessons', href: '/wedding-dance-lessons' },
    { linkText: 'Private Lessons', href: '/private-lessons' },
    { linkText: 'Hen Parties', href: '/hen-parties' },
    { linkText: 'Contact', href: '/contact' } // Add a contact page if needed
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={logo} alt="Wedding Dance Academy logo" width={150} height={50} />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <span className="inline-block px-1.5 py-1 text-gray-700 transition hover:text-primary sm:px-3 sm:py-2">
                                    {item.linkText}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
