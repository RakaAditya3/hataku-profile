'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const orderPlatforms = [
    {
        name: 'GoFood',
        href: 'https://gofood.co.id',
        logo: '/images/gofood-logo.jpg',
    },
    {
        name: 'ShopeeFood',
        href: 'https://shopeefood.co.id',
        logo: '/images/shopeefood-logo.png',
    },
];

const outlet = {
    name: 'HATAKU Dimsum - Porong',
    address: 'Jl. Penitian RT.05 RW.02 Gedang - Porong, Kab. Sidoarjo',
    hours: 'Setiap Hari: 16:30 - 21:00',
    phone: '+62 821-4363-8897',
};

export default function OutletPage() {
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
                        Pesan <span style={{ color: 'var(--color-red-accent)' }}>Sekarang</span>
                    </h1>
                    <p className="text-body-lg max-w-xl mx-auto">
                        Pesan melalui platform favorit Anda atau kunjungi outlet kami
                    </p>
                </motion.div>
            </div>

            <div className="container-main page-content">
                {/* Order Platforms */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    <h2 className="text-heading-md text-center mb-8">
                        Pesan Online
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {orderPlatforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl bg-white"
                                style={{
                                    boxShadow: '0 4px 20px rgba(45, 36, 36, 0.1)',
                                    minWidth: '180px',
                                    height: '80px',
                                }}
                            >
                                <Image
                                    src={platform.logo}
                                    alt={platform.name}
                                    width={140}
                                    height={50}
                                    className="object-contain"
                                    style={{ maxHeight: '50px' }}
                                />
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="text-center mt-10">
                        <p className="text-sm mb-4" style={{ color: 'var(--color-brown-medium)' }}>
                            Atau hubungi langsung via WhatsApp
                        </p>
                        <a
                            href="https://wa.me/6282143638897?text=Halo,%20saya%20ingin%20pesan%20dimsum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-lg"
                            style={{
                                backgroundColor: '#25D366',
                                color: 'white',
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat WhatsApp
                        </a>
                    </div>
                </motion.section>

                {/* Outlet Location - Centered Single Outlet */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-heading-md text-center mb-8">
                        📍 Lokasi Outlet
                    </h2>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-3xl bg-white max-w-md w-full"
                            style={{
                                boxShadow: '0 8px 32px rgba(45, 36, 36, 0.08)',
                            }}
                        >
                            <h3
                                className="font-semibold text-xl mb-6 text-center"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-brown-dark)',
                                }}
                            >
                                {outlet.name}
                            </h3>
                            <div className="space-y-4 text-sm" style={{ color: 'var(--color-brown-medium)' }}>
                                <div className="flex items-start gap-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--color-cream)' }}>
                                    <span className="text-xl flex-shrink-0">📍</span>
                                    <span className="leading-relaxed">{outlet.address}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--color-cream)' }}>
                                    <span className="text-xl flex-shrink-0">🕐</span>
                                    <span>{outlet.hours}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--color-cream)' }}>
                                    <span className="text-xl flex-shrink-0">📞</span>
                                    <a
                                        href={`tel:${outlet.phone}`}
                                        className="hover:underline font-medium"
                                        style={{ color: 'var(--color-red-accent)' }}
                                    >
                                        {outlet.phone}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
