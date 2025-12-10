'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tutor } from '@/lib/types';
import Link from 'next/link';
import { Search, Filter, X, Star, MapPin } from 'lucide-react';

export default function TutorExplorer({ tutors }: { tutors: Tutor[] }) {
    const [search, setSearch] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('All');
    const [maxPrice, setMaxPrice] = useState(100);
    const [showFilters, setShowFilters] = useState(false);

    const subjects = ['All', ...Array.from(new Set(tutors.flatMap(t => t.subjects)))];

    const filteredTutors = useMemo(() => {
        return tutors.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                t.subjects.some(s => s.toLowerCase().includes(search.toLowerCase()));
            const matchesSubject = selectedSubject === 'All' || t.subjects.includes(selectedSubject);
            const matchesPrice = t.priceRange <= maxPrice;
            return matchesSearch && matchesSubject && matchesPrice;
        });
    }, [tutors, search, selectedSubject, maxPrice]);

    return (
        <div className="min-h-screen py-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search tutors or subjects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${showFilters ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                >
                    <Filter size={20} /> Filters
                </button>
            </div>

            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-8"
                    >
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <div className="flex flex-wrap gap-2">
                                    {subjects.map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSelectedSubject(s)}
                                            className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedSubject === s ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Max Price: ${maxPrice}/hr</label>
                                <input
                                    type="range"
                                    min="20"
                                    max="200"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredTutors.map((tutor) => (
                        <motion.div
                            layout
                            key={tutor.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 group"
                        >
                            <Link href={`/tutors/${tutor.id}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white dark:ring-gray-800 group-hover:ring-blue-500 transition-all">
                                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{tutor.name}</h3>
                                            <p className="text-sm text-gray-500">{tutor.subjects.join(', ')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                                        <Star size={14} fill="currentColor" />
                                        <span className="font-bold text-sm">{tutor.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{tutor.bio}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {tutor.location}
                                    </div>
                                    <div className="font-bold text-lg text-blue-600">
                                        ${tutor.priceRange}
                                        <span className="text-xs text-gray-400 font-normal">/hr</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredTutors.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No tutors found matching your criteria.
                </div>
            )}
        </div>
    );
}
