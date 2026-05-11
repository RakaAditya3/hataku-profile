'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MenuCard from './components/sections/MenuCard';
import {
    featuredMenu,
    PORTION_LABEL,
    SAUCE_COUNT_LABEL,
    SAUCE_OPTIONS,
    WHATSAPP_URL,
} from './data/menu';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center overflow-hidden"
                style={{ backgroundColor: 'var(--color-cream)' }}
            >
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
                        style={{ backgroundColor: 'var(--color-blush)' }}
                    />
                    <div
                        className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full opacity-15"
                        style={{ backgroundColor: 'var(--color-beige)' }}
                    />
                </div>

                <div className="container-main relative z-10 pt-28 pb-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-10 lg:gap-12">
                        {/* Left column: copy */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-6"
                            >
                                <span
                                    className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase"
                                    style={{
                                        backgroundColor: 'var(--color-beige)',
                                        color: 'var(--color-brown-medium)',
                                    }}
                                >
                                    Buka 16.30 – 21.00 • Setiap Hari
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-heading-xl mb-6"
                                style={{ color: 'var(--color-brown-dark)' }}
                            >
                                Dimsum Hangat,
                                <br />
                                <span style={{ color: 'var(--color-red-accent)' }}>
                                    Cita Rasa Otentik
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-body-lg max-w-xl mx-auto lg:mx-0 mb-10"
                            >
                                Nikmati kelezatan dimsum dan gyoza autentik, dibuat segar setiap hari
                                dengan resep tradisional dan bahan berkualitas terbaik.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                            >
                                <Link href="/menu" className="btn-primary">
                                    Lihat Menu
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                                <Link href="/outlet" className="btn-secondary">
                                    Pesan Sekarang
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right column: photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-md lg:max-w-none lg:rotate-2">
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src="/menu/large-mozza.jpeg"
                                        alt="Hataku Dimsum Mentai Mozza"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 90vw, 45vw"
                                        className="object-cover"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/30 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Menu Preview */}
            <section
                className="section-padding"
                style={{ backgroundColor: 'var(--color-beige)' }}
            >
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-heading-lg mb-4">
                            Menu <span style={{ color: 'var(--color-red-accent)' }}>Favorit</span>
                        </h2>
                        <p className="text-body-lg">Pilihan terpopuler dari pelanggan kami</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {featuredMenu.map((item) => (
                            <MenuCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                portion={PORTION_LABEL[item.size]}
                                sauceLabel={SAUCE_COUNT_LABEL}
                                badges={item.badges}
                                image={item.image}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/menu" className="btn-gold">
                            Lihat Semua Menu
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sauce Options Section */}
            <section
                className="section-padding"
                style={{ backgroundColor: 'var(--color-cream)' }}
            >
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-heading-lg mb-3">
                            8 Pilihan{' '}
                            <span style={{ color: 'var(--color-red-accent)' }}>Saus Spesial</span>
                        </h2>
                        <p className="text-body-lg">
                            Semua dimsum tersedia dengan pilihan saus favoritmu
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
                    >
                        {SAUCE_OPTIONS.map((sauce) => (
                            <span
                                key={sauce.name}
                                className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm"
                                style={{
                                    borderColor: '#FDE68A',
                                    color: '#92400E',
                                }}
                            >
                                {sauce.name}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Cara Pesan & Info Section */}
            <section
                className="section-padding"
                style={{ backgroundColor: 'var(--color-beige)' }}
            >
                <div className="container-main">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {/* Cara Pesan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm"
                        >
                            <h3
                                className="text-heading-md mb-6"
                                style={{ color: 'var(--color-brown-dark)' }}
                            >
                                Cara <span style={{ color: 'var(--color-red-accent)' }}>Pesan</span>
                            </h3>
                            <ol className="space-y-4 mb-8">
                                {[
                                    'Pilih menu favorit Anda',
                                    'Chat WhatsApp kami',
                                    'Konfirmasi pesanan & pembayaran',
                                    'Dimsum segar siap dinikmati!',
                                ].map((text, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-semibold"
                                            style={{
                                                backgroundColor: 'var(--color-beige)',
                                                color: 'var(--color-brown-dark)',
                                            }}
                                        >
                                            {idx + 1}
                                        </span>
                                        <span
                                            className="pt-1 text-base"
                                            style={{ color: 'var(--color-brown-medium)' }}
                                        >
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
                                style={{ backgroundColor: '#25D366' }}
                            >
                                Chat WhatsApp Sekarang
                                <span aria-hidden="true">→</span>
                            </a>
                        </motion.div>

                        {/* Info Pemesanan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm"
                        >
                            <h3
                                className="text-heading-md mb-6"
                                style={{ color: 'var(--color-brown-dark)' }}
                            >
                                Info{' '}
                                <span style={{ color: 'var(--color-red-accent)' }}>
                                    Pemesanan
                                </span>
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    {
                                        title: 'Jam Buka',
                                        value: 'Setiap hari 16.30 – 21.00 WIB',
                                    },
                                    {
                                        title: 'Area Layanan',
                                        value: 'Porong & sekitarnya, Sidoarjo',
                                    },
                                    {
                                        title: 'Pilihan Saus',
                                        value:
                                            'Mentai, Tartar, Volcano, Cheese, Mushroom, Bolognese, Mix & more',
                                    },
                                    {
                                        title: 'Cara Order',
                                        value: 'Order via WhatsApp',
                                    },
                                ].map((info) => (
                                    <li
                                        key={info.title}
                                        className="border-l-2 pl-4"
                                        style={{ borderColor: 'var(--color-blush)' }}
                                    >
                                        <p
                                            className="text-xs uppercase tracking-wider font-semibold mb-1"
                                            style={{ color: 'var(--color-brown-light)' }}
                                        >
                                            {info.title}
                                        </p>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'var(--color-brown-dark)' }}
                                        >
                                            {info.value}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="section-padding"
                style={{
                    background:
                        'linear-gradient(135deg, var(--color-brown-dark) 0%, #3D3030 100%)',
                }}
            >
                <div className="container-main text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-heading-lg mb-4" style={{ color: 'white' }}>
                            Siap Menikmati{' '}
                            <span style={{ color: 'var(--color-gold)' }}>Kelezatan</span>?
                        </h2>
                        <p
                            className="text-body-lg mb-8 max-w-xl mx-auto"
                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            Pesan sekarang dan nikmati dimsum hangat di rumah
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/outlet"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1"
                                style={{
                                    backgroundColor: 'var(--color-red-accent)',
                                    color: 'white',
                                }}
                            >
                                Pesan Sekarang
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
