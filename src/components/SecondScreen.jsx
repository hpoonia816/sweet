"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function SecondScreen({ onNext }) {

    // Path points (top → bottom)
    const pathY = [-120, -80, -40, 0, 40, 80, 120]
    const pathX = [0, 20, 40, 30, 15, 5, 0]

    return (
        <div className="flex flex-col items-center justify-center relative overflow-hidden min-h-screen">

            {/* CENTER CONTENT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >
                <motion.div className="mb-10 w-32 h-32 rounded-full border border-secondary/20 relative flex items-center justify-center">
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-secondary/30 to-primary/10 backdrop-blur-md"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Heart className="w-18 h-18 text-secondary fill-current" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl text-center mb-10 max-w-3xl font-medium"
                >
                    Your presence has a way of making things better.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <button
                        onClick={onNext}
                        className="px-10 py-4 bg-linear-to-r from-secondary to-primary rounded-full text-lg shadow-lg flex items-center gap-2 font-medium"
                    >
                        This is for u <Heart size={20} className="fill-white" />
                    </button>
                </motion.div>
            </motion.div>

            {/* IMAGE 1 – RIGHT SIDE (ORIGINAL PATH) */}
            <motion.img
                src="/3.jpg"
                alt="Floating image"
                className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full shadow-lg"
                animate={{
                    x: pathX,
                    y: pathY,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* IMAGE 2 – LEFT SIDE (MIRROR PATH) */}
            <motion.img
                src="/1.jpg"
                alt="Floating image"
                className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full shadow-lg"
                animate={{
                    x: pathX.map(v => -v), // 🔁 mirror X
                    y: pathY,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    )
}
