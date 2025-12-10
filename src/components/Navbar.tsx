'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, BookOpen, Users, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Find Tutors', href: '/tutors', icon: Search },
    { name: 'Compare', href: '/compare', icon: Users },
    { name: 'Notes', href: '/notes', icon: FileText },
    { name: 'Student', href: '/student', icon: BookOpen },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
        >
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl px-6 py-3 flex items-center gap-6">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-4 hidden md:block">
                    TutorConnect
                </Link>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} className="relative group flex flex-col items-center">
                            <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                <item.icon size={20} />
                            </div>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-1 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                                />
                            )}
                            <span className="absolute top-full mt-2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
