'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuCard from '../components/sections/MenuCard';
import {
    menuItems,
    PORTION_LABEL,
    SAUCE_COUNT_LABEL,
} from '../data/menu';

const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'signature', name: 'Mentai Signature' },
    { id: 'spesial', name: 'Mentai Spesial' },
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
                            portion={PORTION_LABEL[item.size]}
                            sauceLabel={SAUCE_COUNT_LABEL}
                            badges={item.badges}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
