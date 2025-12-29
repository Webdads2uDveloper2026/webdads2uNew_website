"use client";
import MainLayout from "@/app/common/MainLayout";
import React from "react";
import { motion } from "framer-motion";

const floatAnimation = {
    animate: {
        y: [0, -12, 0],
    },
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

const HomeSection = () => {
    return (
        <MainLayout>
            <div className="relative min-h-screen flex items-center justify-center bg-linea-to-br from-gray-50 via-white to-gray-100 px-4 overflow-hidden">
                <motion.div
                    className="absolute w-72 h-72 sm:w-[420px] sm:h-[420px] bg-yellow-400/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10 text-center w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl"
                >
                    <motion.div {...floatAnimation} className="mb-6">
                        <motion.div
                            animate={{ rotate: [0, 6, -6, 6, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                            <span className="text-3xl sm:text-4xl">🚧</span>
                        </motion.div>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3"
                    >
                        Under Construction
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90px" }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-1 bg-yellow-500 mx-auto rounded-full mb-5"
                    />
                    <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    >
                        We’re crafting something beautiful and powerful.
                        <br className="hidden sm:block" />
                        Please check back soon.
                    </motion.p>
                    <motion.div className="flex justify-center gap-2 mt-6">
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="w-2.5 h-2.5 bg-yellow-500 rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    delay: i * 0.25,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default HomeSection;
