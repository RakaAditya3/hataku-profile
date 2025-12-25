'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuCardProps {
    name: string;
    description: string;
    price: string;
    image?: string;
    emoji?: string;
}

export default function MenuCard({
    name,
    description,
    price,
    image,
    emoji = '🥟',
}: MenuCardProps) {
    return (
        <motion.div
            className="card-menu cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
        >
            {/* Image container */}
            <div
                className="relative aspect-square overflow-hidden"
                style={{ backgroundColor: 'var(--color-beige)' }}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl">{emoji}</span>
                    </div>
                )}
            </div>

            {/* Content - simplified, no cart button */}
            <div className="p-5">
                <h3
                    className="font-semibold text-lg mb-2"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-brown-dark)',
                    }}
                >
                    {name}
                </h3>
                <p
                    className="text-sm mb-3 line-clamp-2"
                    style={{ color: 'var(--color-brown-medium)' }}
                >
                    {description}
                </p>
                <span className="price-highlight text-lg">
                    {price}
                </span>
            </div>
        </motion.div>
    );
}
