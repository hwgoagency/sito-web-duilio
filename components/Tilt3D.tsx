"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

// Tilt prospettico che segue il mouse (pattern 3D card di 21st.dev/Aceternity).
// Max ±5°: percepibile ma non da luna park. Disattivo con prefers-reduced-motion.
export function Tilt3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 140, damping: 18 });
    const sry = useSpring(ry, { stiffness: 140, damping: 18 });

    const onMove = (e: React.MouseEvent) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx.set(((e.clientY - r.top) / r.height - 0.5) * -10);
    };

    const onLeave = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <div className={className} style={{ perspective: 1100 }} onMouseMove={onMove} onMouseLeave={onLeave}>
            <motion.div ref={ref} style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }} className="h-full w-full">
                {children}
            </motion.div>
        </div>
    );
}
