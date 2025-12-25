'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Tentang', href: '/about' },
    { name: 'Outlet', href: '/outlet' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
                    }`}
                style={{
                    backgroundColor: isScrolled ? 'rgba(253, 248, 243, 0.95)' : 'transparent',
                }}
            >
                <nav className="container-main">
                    <div className="flex items-center justify-between h-25">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div
                                className="w-25 h-25 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-white-accent), var(--color-brown-dark))',
                                }}
                            >
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className="font-bold text-lg tracking-wide"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-brown-dark)',
                                    }}
                                >
                                    HATAKU
                                </span>
                                <span
                                    className="text-[10px] tracking-[0.2em] uppercase"
                                    style={{ color: 'var(--color-brown-medium)' }}
                                >
                                    Dimsum & Gyoza
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative py-2 text-sm font-medium tracking-wide transition-colors"
                                    style={{
                                        color: isActive(link.href)
                                            ? 'var(--color-red-accent)'
                                            : 'var(--color-brown-dark)',
                                    }}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                            style={{ backgroundColor: 'var(--color-red-accent)' }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                            <Link
                                href="/outlet"
                                className="btn-primary text-sm py-2.5 px-5"
                            >
                                Pesan Sekarang
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`w-6 h-0.5 origin-center transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                    style={{ backgroundColor: 'var(--color-brown-dark)' }}
                                />
                                <span
                                    className={`w-6 h-0.5 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''
                                        }`}
                                    style={{ backgroundColor: 'var(--color-brown-dark)' }}
                                />
                                <span
                                    className={`w-6 h-0.5 origin-center transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                    style={{ backgroundColor: 'var(--color-brown-dark)' }}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ backgroundColor: 'rgba(253, 248, 243, 0.98)' }}
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="text-2xl font-medium"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: isActive(link.href)
                                                ? 'var(--color-red-accent)'
                                                : 'var(--color-brown-dark)',
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="/outlet"
                                    onClick={handleLinkClick}
                                    className="btn-primary mt-4"
                                >
                                    Pesan Sekarang
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
