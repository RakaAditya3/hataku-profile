'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

// 10 testimoni realistis
const testimonials = [
    {
        quote: "Dimsum-nya juara, anak-anak suka banget. Sekarang langganan tiap minggu.",
        name: "Bu Rina",
        rating: 5,
    },
    {
        quote: "Gyoza-nya renyah di luar, juicy di dalam. Persis kayak di resto mahal.",
        name: "Kak Andi P.",
        rating: 5,
    },
    {
        quote: "Bumbunya pas, nggak terlalu asin. Cocok buat keluarga.",
        name: "Kak Sarah",
        rating: 4,
    },
    {
        quote: "Pertama kali coba siomay-nya, langsung nagih. Teksturnya lembut banget.",
        name: "Kak Budi",
        rating: 5,
    },
    {
        quote: "Packaging-nya rapi, sampai rumah masih anget. Pelayanannya ramah.",
        name: "Kak Dina W.",
        rating: 5,
    },
    {
        quote: "Cukup enak sih, tapi porsinya agak kecil menurut saya.",
        name: "KakRaka",
        rating: 3,
    },
    {
        quote: "Hakau udangnya beneran berasa udangnya. Worth it banget.",
        name: "Kak Fitri",
        rating: 5,
    },
    {
        quote: "Udah 3x order, konsisten rasanya. Top deh!",
        name: "Pak Hendra",
        rating: 5,
    },
    {
        quote: "Enak, cuma sayang nggak ada varian pedas.",
        name: "Kak Asyla",
        rating: 4,
    },
    {
        quote: "Dimsum frozen terbaik yang pernah saya coba. Praktis banget.",
        name: "Kak Nadia",
        rating: 5,
    },
];

// Duplicate for infinite loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialCarousel() {
    const [isPaused, setIsPaused] = useState(false);
    const [currentOffset, setCurrentOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const totalWidth = testimonials.length * (cardWidth + gap);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentOffset((prev) => {
                const next = prev - (cardWidth + gap);
                // Reset when we've scrolled through the original set
                if (Math.abs(next) >= totalWidth) {
                    return 0;
                }
                return next;
            });
        }, 5000); // 5 detik per slide

        return () => clearInterval(interval);
    }, [isPaused, totalWidth]);

    // Animate offset changes
    useEffect(() => {
        controls.start({
            x: currentOffset,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 30,
            },
        });
    }, [currentOffset, controls]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        const dragDistance = info.offset.x;

        if (dragDistance > threshold) {
            // Dragged right - go prev
            setCurrentOffset((prev) => {
                const next = prev + (cardWidth + gap);
                if (next > 0) return -(totalWidth - (cardWidth + gap));
                return next;
            });
        } else if (dragDistance < -threshold) {
            // Dragged left - go next
            setCurrentOffset((prev) => {
                const next = prev - (cardWidth + gap);
                if (Math.abs(next) >= totalWidth) return 0;
                return next;
            });
        }
    };

    return (
        <section className="overflow-hidden py-4">
            <motion.div
                ref={containerRef}
                className="flex gap-6 cursor-grab active:cursor-grabbing"
                style={{ paddingLeft: 'var(--container-padding)' }}
                animate={controls}
                drag="x"
                dragConstraints={{ left: -totalWidth, right: 0 }}
                dragElastic={0.1}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(e, info) => {
                    setIsPaused(false);
                    handleDragEnd(e, info);
                }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.name}-${index}`}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        rating={testimonial.rating}
                    />
                ))}
            </motion.div>
        </section>
    );
}
