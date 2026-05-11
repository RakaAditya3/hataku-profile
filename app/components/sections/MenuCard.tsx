'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BADGE_STYLES, MenuBadge } from '../../data/menu';

interface MenuCardProps {
    name: string;
    description: string;
    price: string;
    portion?: string;
    sauceLabel?: string;
    badges?: MenuBadge[];
    image?: string;
    emoji?: string;
}

export default function MenuCard({
    name,
    description,
    price,
    portion,
    sauceLabel,
    badges = [],
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl">{emoji}</span>
                    </div>
                )}

                {/* Badges stack */}
                {badges.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
                        {badges.map((badge) => {
                            const style = BADGE_STYLES[badge];
                            return (
                                <span
                                    key={badge}
                                    className="text-xs font-semibold px-2 py-1 rounded-full shadow-sm w-fit"
                                    style={{
                                        backgroundColor: style.bg,
                                        color: style.text,
                                    }}
                                >
                                    {style.label}
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Content */}
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

                {/* Info badges: portion + sauces */}
                {(portion || sauceLabel) && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {portion && (
                            <span
                                className="text-xs font-medium px-2 py-1 rounded-full"
                                style={{
                                    backgroundColor: '#E2E8F0',
                                    color: '#475569',
                                }}
                            >
                                {portion}
                            </span>
                        )}
                        {sauceLabel && (
                            <span
                                className="text-xs font-medium px-2 py-1 rounded-full"
                                style={{
                                    backgroundColor: '#FFEDD5',
                                    color: '#9A3412',
                                }}
                            >
                                🥫 {sauceLabel}
                            </span>
                        )}
                    </div>
                )}

                <span className="price-highlight text-lg">{price}</span>
            </div>
        </motion.div>
    );
}
