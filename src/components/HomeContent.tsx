'use client';
import { motion } from 'framer-motion';
import { Tutor } from '@/lib/types';
import Link from 'next/link';
import { ArrowRight, Star, MapPin } from 'lucide-react';

export default function HomeContent({ tutors }: { tutors: Tutor[] }) {
    return (
        <div className="space-y-16">
            <section className="text-center space-y-6 py-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Master Any Subject <br /> From Home.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Connect with top-rated local tutors. No sign-ups, no fees, just pure learning.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/tutors" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-lg shadow-blue-600/20">
                        Find a Tutor <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </section>

            <section>
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold">Featured Tutors</h2>
                    <Link href="/tutors" className="text-blue-600 hover:underline">View all</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tutors.slice(0, 3).map((tutor, index) => (
                        <Link key={tutor.id} href={`/tutors/${tutor.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:-translate-y-1 cursor-pointer h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{tutor.name}</h3>
                                            <p className="text-sm text-gray-500">{tutor.subjects[0]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star size={16} fill="currentColor" />
                                        <span className="font-medium">{tutor.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{tutor.bio}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {tutor.location}
                                    </div>
                                    <div className="font-semibold text-blue-600">
                                        ${tutor.priceRange}/hr
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
