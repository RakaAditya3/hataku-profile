'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MenuCard from './components/sections/MenuCard';

const featuredMenu = [
  {
    name: 'Regular Cheezy',
    description: 'Mentai dengan topping keju leleh yang creamy dan gurih',
    price: 'Rp 25.000',
    image: '/menu/regular-cheezy.JPG',
  },
  {
    name: 'Large Mozza',
    description: 'Porsi besar mentai mozza dengan keju stretchy yang menggoda',
    price: 'Rp 38.000',
    image: '/menu/large-mozza.jpeg',
  },
  {
    name: 'Regular Boncabe',
    description: 'Mentai dengan taburan boncabe pedas yang menggugah selera',
    price: 'Rp 28.000',
    image: '/menu/regular-boncabe.JPG',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

        <div className="container-main relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto px-4 pt-24 pb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase"
                style={{
                  backgroundColor: 'var(--color-beige)',
                  color: 'var(--color-brown-medium)',
                }}
              >
                Dimsum & Gyoza Premium
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-heading-xl mb-6"
              style={{ color: 'var(--color-brown-dark)' }}
            >
              Dimsum Hangat,
              <br />
              <span style={{ color: 'var(--color-red-accent)' }}>Cita Rasa Otentik</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-body-lg max-w-2xl mx-auto mb-10"
            >
              Nikmati kelezatan dimsum dan gyoza autentik, dibuat segar setiap hari
              dengan resep tradisional dan bahan berkualitas terbaik.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/menu" className="btn-primary">
                Lihat Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/outlet" className="btn-secondary">
                Pesan Sekarang
              </Link>
            </motion.div>

            {/* Hero illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <div
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-full mx-auto flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-beige) 0%, var(--color-cream) 100%)',
                  boxShadow: '0 20px 50px rgba(45, 36, 36, 0.08)',
                }}
              >
                <div className="text-center">
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </motion.div>
          </motion.div>
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
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="btn-gold">
              Lihat Semua Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, var(--color-brown-dark) 0%, #3D3030 100%)',
        }}
      >
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-heading-lg mb-4"
              style={{ color: 'white' }}
            >
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
