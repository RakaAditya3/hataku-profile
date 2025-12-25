'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
    quote: string;
    name: string;
    rating: number;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`Rating: ${rating} dari 5 bintang`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className="text-sm"
                    style={{
                        color: star <= rating ? 'var(--color-gold)' : 'var(--color-beige)',
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default function TestimonialCard({ quote, name, rating }: TestimonialCardProps) {
    return (
        <motion.div
            className="flex-shrink-0 w-72 sm:w-80 p-6 rounded-2xl"
            style={{
                backgroundColor: 'var(--color-beige)',
                boxShadow: '0 4px 16px rgba(45, 36, 36, 0.06)',
            }}
        >
            {/* Quote */}
            <p
                className="text-sm leading-relaxed mb-4 line-clamp-3"
                style={{
                    color: 'var(--color-brown-dark)',
                    fontStyle: 'italic',
                }}
            >
                "{quote}"
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-brown-medium)' }}
                >
                    — {name}
                </p>
                <StarRating rating={rating} />
            </div>
        </motion.div>
    );
}
