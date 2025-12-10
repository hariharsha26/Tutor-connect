'use client';
import { motion } from 'framer-motion';
import { Tutor } from '@/lib/types';
import { ArrowLeft, Play, FileText, Clock, MapPin, DollarSign, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TutorProfile({ tutor }: { tutor: Tutor }) {
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <Link href="/tutors" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Tutors
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
            >
                <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="absolute -bottom-16 left-8 p-1 bg-white dark:bg-gray-900 rounded-full">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-8 pb-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{tutor.name}</h1>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tutor.subjects.map(s => (
                                    <span key={s} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-lg">
                                <Star size={18} fill="currentColor" />
                                <span className="font-bold text-lg">{tutor.rating}</span>
                            </div>
                            <div className="text-2xl font-bold text-blue-600">
                                ${tutor.priceRange}<span className="text-sm text-gray-400 font-normal">/hr</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2 space-y-8">
                            <section>
                                <h2 className="text-xl font-bold mb-4">About</h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {tutor.bio}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4">Demo Videos</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tutor.demoVideos.map((video, idx) => (
                                        <div key={idx} className="relative group rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                                            {playingVideo === video ? (
                                                <video
                                                    src={`/AllData/demoVideos/${video}`}
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <button
                                                    onClick={() => setPlayingVideo(video)}
                                                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
                                                >
                                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                        <Play size={24} className="text-blue-600 ml-1" />
                                                    </div>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4">Study Notes</h2>
                                <div className="space-y-2">
                                    {tutor.notes.map((note, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                                                    <FileText size={20} />
                                                </div>
                                                <span className="font-medium">{note}</span>
                                            </div>
                                            <button className="text-sm font-medium text-blue-600 hover:underline">
                                                View PDF
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 space-y-4">
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Clock size={20} />
                                    <span>{tutor.timings}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <MapPin size={20} />
                                    <span>{tutor.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <DollarSign size={20} />
                                    <span>${tutor.priceRange}/hr</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                Book a Session
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
