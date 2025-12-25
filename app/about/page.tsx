'use client';

import { motion } from 'framer-motion';
import TestimonialCarousel from '@/app/components/sections/TestimonialCarousel';

const features = [
    {
        icon: '🌿',
        title: 'Bahan Segar',
        description: 'Dipilih langsung dari supplier terpercaya setiap hari',
    },
    {
        icon: '👨‍🍳',
        title: 'Resep Autentik',
        description: 'Dikembangkan dari resep tradisional turun-temurun',
    },
    {
        icon: '❤️',
        title: 'Dibuat dengan Cinta',
        description: 'Setiap dimsum dibuat dengan penuh dedikasi',
    },
    {
        icon: '🏆',
        title: 'Kualitas Premium',
        description: 'Standar tinggi dalam setiap proses pembuatan',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
            {/* Page Header */}
            <div className="page-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container-main"
                >
                    <h1 className="text-heading-lg mb-4">
                        Tentang <span style={{ color: 'var(--color-red-accent)' }}>HATAKU</span>
                    </h1>
                    <p className="text-body-lg max-w-xl mx-auto">
                        Cerita di balik kelezatan dimsum dan gyoza kami
                    </p>
                </motion.div>
            </div>

            {/* Story Section */}
            <section className="container-main page-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div
                            className="aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center"
                            style={{ backgroundColor: 'var(--color-beige)' }}
                        >
                            <div className="text-center">
                                <img src="/menu/family-original.jpeg" alt="" />
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">⭐</span>
                                <div>
                                    <p className="font-bold text-lg" style={{ color: 'var(--color-brown-dark)' }}>
                                        4.9/5
                                    </p>
                                    <p className="text-xs" style={{ color: 'var(--color-brown-medium)' }}>
                                        500+ Reviews
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-heading-md mb-6">
                            Cerita Dibalik <span style={{ color: 'var(--color-gold)' }}>HATAKU</span>
                        </h2>

                        <p className="text-body-lg mb-6">
                            HATAKU lahir dari kecintaan terhadap cita rasa dimsum otentik yang
                            hangat dan menyatukan keluarga. Nama &ldquo;Hataku&rdquo; diambil dari bahasa
                            Jepang yang berarti &ldquo;hati&rdquo; — karena setiap sajian kami dibuat dengan
                            sepenuh hati.
                        </p>

                        <p className="text-body mb-8">
                            Dengan resep yang dikembangkan selama bertahun-tahun dan bahan-bahan
                            pilihan terbaik, kami berkomitmen menghadirkan dimsum dan gyoza
                            premium yang tidak hanya lezat, tapi juga membawa kehangatan dalam
                            setiap gigitan.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20"
                >
                    <h3 className="text-heading-md text-center mb-10">
                        Mengapa <span style={{ color: 'var(--color-red-accent)' }}>HATAKU</span>?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="text-center p-6 rounded-2xl"
                                style={{ backgroundColor: 'var(--color-beige)' }}
                            >
                                <span className="text-5xl block mb-4">{feature.icon}</span>
                                <h4
                                    className="font-semibold mb-2"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-brown-dark)',
                                    }}
                                >
                                    {feature.title}
                                </h4>
                                <p className="text-sm" style={{ color: 'var(--color-brown-medium)' }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Testimonial Section */}
            <section className="container-main pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20"
                >
                    <h3 className="text-heading-md text-center mb-10">
                        Apa Kata <span style={{ color: 'var(--color-gold)' }}>Pelanggan Kami</span>
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <TestimonialCarousel />
                </motion.div>
            </section>
        </div>
    );
}
