'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuCard from '../components/sections/MenuCard';

const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'signature', name: 'Mentai Signature' },
    { id: 'spesial', name: 'Mentai Spesial' },
];

// Menu data - image filenames match exactly with /menu/{slug}.png
const menuItems = [
    // === Mentai Signature ===
    {
        id: 1,
        name: 'Regular Cheezy',
        slug: 'regular-cheezy',
        description: 'Mentai dengan topping keju leleh yang creamy dan gurih',
        price: 'Rp 25.000',
        category: 'signature',
        image: '/menu/regular-cheezy.JPG',
    },
    {
        id: 2,
        name: 'Large Cheezy',
        slug: 'large-cheezy',
        description: 'Porsi besar mentai dengan topping keju leleh yang melimpah',
        price: 'Rp 35.000',
        category: 'signature',
        image: '/menu/large-cheezy.JPG',
    },
    {
        id: 3,
        name: 'Family Cheezy',
        slug: 'family-cheezy',
        description: 'Porsi keluarga mentai cheezy untuk berbagi bersama',
        price: 'Rp 55.000',
        category: 'signature',
        image: '/menu/family-cheezy.JPG',
    },
    {
        id: 4,
        name: 'Regular Mozza',
        slug: 'regular-mozza',
        description: 'Mentai dengan taburan keju mozzarella yang meleleh sempurna',
        price: 'Rp 28.000',
        category: 'signature',
        image: '/menu/regular-mozza.jpeg',
    },
    {
        id: 5,
        name: 'Large Mozza',
        slug: 'large-mozza',
        description: 'Porsi besar mentai mozza dengan keju stretchy yang menggoda',
        price: 'Rp 38.000',
        category: 'signature',
        image: '/menu/large-mozza.jpeg',
    },
    {
        id: 6,
        name: 'Family Mozza',
        slug: 'family-mozza',
        description: 'Porsi keluarga mentai mozza untuk momen spesial bersama',
        price: 'Rp 58.000',
        category: 'signature',
        image: '/menu/family-mozza.JPG',
    },
    {
        id: 7,
        name: 'Regular Original',
        slug: 'regular-original',
        description: 'Mentai original dengan saus mentai klasik yang otentik',
        price: 'Rp 22.000',
        category: 'signature',
        image: '/menu/regular-original.jpeg',
    },
    {
        id: 8,
        name: 'Large Original',
        slug: 'large-original',
        description: 'Porsi besar mentai original dengan cita rasa autentik',
        price: 'Rp 32.000',
        category: 'signature',
        image: '/menu/large-original.jpeg',
    },
    {
        id: 9,
        name: 'Family Original',
        slug: 'family-original',
        description: 'Porsi keluarga mentai original untuk dinikmati bersama',
        price: 'Rp 52.000',
        category: 'signature',
        image: '/menu/family-original.jpeg',
    },
    // === Mentai Spesial ===
    {
        id: 10,
        name: 'Regular Mix',
        slug: 'regular-mix',
        description: 'Kombinasi mentai dengan berbagai topping pilihan',
        price: 'Rp 30.000',
        category: 'spesial',
        image: '/menu/regular-mix.JPG',
    },
    {
        id: 11,
        name: 'Large Mix',
        slug: 'large-mix',
        description: 'Porsi besar mentai mix dengan topping lengkap',
        price: 'Rp 42.000',
        category: 'spesial',
        image: '/menu/large-mix.JPG',
    },
    {
        id: 12,
        name: 'Family Mix',
        slug: 'family-mix',
        description: 'Porsi keluarga mentai mix untuk berbagi bersama',
        price: 'Rp 62.000',
        category: 'spesial',
        image: '/menu/family-mix.JPG',
    },
    {
        id: 13,
        name: 'Regular Boncabe',
        slug: 'regular-boncabe',
        description: 'Mentai dengan taburan boncabe pedas yang menggugah selera',
        price: 'Rp 28.000',
        category: 'spesial',
        image: '/menu/regular-boncabe.JPG',
    },
    {
        id: 14,
        name: 'Large Boncabe',
        slug: 'large-boncabe',
        description: 'Porsi besar mentai boncabe untuk pecinta pedas',
        price: 'Rp 40.000',
        category: 'spesial',
        image: '/menu/large-boncabe.JPG',
    },
    {
        id: 15,
        name: 'Family Boncabe',
        slug: 'family-boncabe',
        description: 'Porsi keluarga mentai boncabe dengan sensasi pedas nikmat',
        price: 'Rp 60.000',
        category: 'spesial',
        image: '/menu/family-boncabe.JPG',
    },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems =
        activeCategory === 'all'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

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
                        Menu <span style={{ color: 'var(--color-red-accent)' }}>Kami</span>
                    </h1>
                    <p className="text-body-lg max-w-xl mx-auto">
                        Pilihan dimsum dan gyoza premium, dibuat segar setiap hari
                    </p>
                </motion.div>
            </div>

            {/* Category Filter */}
            <div className="container-main">
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                            style={{
                                backgroundColor:
                                    activeCategory === category.id
                                        ? 'var(--color-red-accent)'
                                        : 'white',
                                color:
                                    activeCategory === category.id
                                        ? 'white'
                                        : 'var(--color-brown-dark)',
                                boxShadow:
                                    activeCategory === category.id
                                        ? '0 4px 12px rgba(139, 38, 53, 0.2)'
                                        : '0 2px 8px rgba(45, 36, 36, 0.05)',
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
                    {filteredItems.map((item) => (
                        <MenuCard
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
