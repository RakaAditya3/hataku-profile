'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Outlet', href: '/outlet' },
];

const socialLinks = [
    {
        name: 'Instagram',
        handle: '@hataku_id',
        href: 'https://instagram.com/hataku_id',
        hoverColor: '#E4405F',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        handle: '0821-4363-8897',
        href: 'https://wa.me/6282143638897',
        hoverColor: '#25D366',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.18 1.6 5.974L0 24l6.186-1.575A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.948.992-3.614-.235-.372A9.818 9.818 0 1112 21.818z" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        handle: '@hataku_id',
        href: 'https://tiktok.com/@hataku_id',
        hoverColor: '#25F4EE',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.971-1.166-1.957-1.282-2.647h.004C16.367 1.123 16.4 1 16.41 1h-3.39v13.111c0 .176 0 .35-.008.522l-.001.064-.003.046v.007a3.485 3.485 0 01-1.756 2.766 3.428 3.428 0 01-1.704.452c-1.9 0-3.44-1.55-3.44-3.464 0-1.914 1.54-3.464 3.44-3.464.36 0 .706.056 1.031.16l.004-3.45a6.873 6.873 0 00-5.305 1.55 7.263 7.263 0 00-1.585 1.957C2.881 12.359 2.493 14.5 2.964 16.561c.337 1.471 1.107 2.793 2.187 3.755 1.32 1.179 3.06 1.835 4.831 1.835 3.842 0 6.964-3.103 6.964-6.93V8.766a8.46 8.46 0 005.07 1.65v-3.39a4.836 4.836 0 01-2.695-1.464z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-brown-dark)' }}
        >
            {/* Decorative top border */}
            <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                    background:
                        'linear-gradient(90deg, var(--color-gold), var(--color-blush), var(--color-gold))',
                }}
            />

            <div className="container-main section-padding">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <div
                                    className="w-25 h-25 rounded-full flex items-center justify-center"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, var(--color-white), var(--color-white))',
                                    }}
                                >
                                    <img src="/images/logo.png" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="font-bold text-lg tracking-wide text-white"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        HATAKU
                                    </span>
                                    <span
                                        className="text-xs tracking-[0.2em] uppercase"
                                        style={{ color: 'var(--color-blush)' }}
                                    >
                                        Dimsum
                                    </span>
                                </div>
                            </div>
                            <p
                                className="text-sm max-w-xs mx-auto md:mx-0"
                                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                Dimsum hangat, cita rasa otentik. Dibuat dengan cinta untuk
                                keluarga Indonesia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4
                                className="text-sm font-semibold uppercase tracking-widest mb-6"
                                style={{ color: 'var(--color-gold)' }}
                            >
                                Menu Cepat
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm transition-colors hover:text-white"
                                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4
                                className="text-sm font-semibold uppercase tracking-widest mb-6"
                                style={{ color: 'var(--color-gold)' }}
                            >
                                Ikuti Kami
                            </h4>
                            <ul className="flex flex-col items-center md:items-end gap-3">
                                {socialLinks.map((social) => (
                                    <li key={social.name} className="w-full max-w-55">
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${social.name} ${social.handle}`}
                                            className="group flex items-center gap-3 rounded-full px-3 py-2 transition-colors md:justify-end"
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                                color: 'rgba(255, 255, 255, 0.85)',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = social.hoverColor;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color =
                                                    'rgba(255, 255, 255, 0.85)';
                                            }}
                                        >
                                            <span
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                                }}
                                            >
                                                {social.icon}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {social.handle}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 pt-8 border-t text-center"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                    <p
                        className="text-xs"
                        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    >
                        © {currentYear} HATAKU DIMSUM. Semua hak dilindungi.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
