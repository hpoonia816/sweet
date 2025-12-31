"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >
                <motion.div
                    className="mb-10 w-32 h-32 rounded-full border border-secondary/20 relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-secondary/30 to-primary/10 backdrop-blur-md"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart className="w-18 h-18 text-secondary fill-current" />
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl text-center mb-10 max-w-3xl text-foreground leading-tight font-medium"
                >
                    Your presence has a way of making things better.
                </motion.h1>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <button
                        onClick={onNext}
                        className="px-10 py-4 bg-linear-to-r from-secondary to-primary rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:from-secondary/90 hover:to-primary/90 hover:shadow-secondary/20 flex items-center gap-2 font-medium"
                    >
                        This is for u                        <Heart size={20} className="mb-1 fill-white" />
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating Image */}
            <motion.img
                // src="/path/to/your/pasted/image.jpg"  // Replace with the actual path to the image you pasted
                src="/3.jpg"
                alt="Floating image"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, 100, -30, 0],
                    y: [0, -60, 20, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    opacity: { duration: 1, delay: 1 },
                    scale: { duration: 1, delay: 1 },
                    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-1/4 right-1/4 w-24 h-24 object-cover rounded-full shadow-lg z-10"
            />
            <motion.img
                // src="/path/to/your/pasted/image.jpg"  // Replace with the actual path to the image you pasted
                // src="/sweet-favor\src\app\1.jpg"  // Replace with the actual path to the image you pasted
                src="/1.jpg"  // Replace with the actual path to the image you pasted
                alt="Floating image"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, -100, -30, 0],
                    y: [0, -60, 20, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    opacity: { duration: 1, delay: 1 },
                    scale: { duration: 1, delay: 1 },
                    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-1/4 left-1/4 w-24 h-24 object-cover rounded-full shadow-lg z-10"
            />
        </div>
    )
}
