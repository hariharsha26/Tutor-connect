'use client';
import { useState } from 'react';
import { Tutor } from '@/lib/types';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function CompareContent({ tutors }: { tutors: Tutor[] }) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggleTutor = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(i => i !== id));
        } else {
            if (selectedIds.length < 3) {
                setSelectedIds([...selectedIds, id]);
            }
        }
    };

    const selectedTutors = tutors.filter(t => selectedIds.includes(t.id));

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-8">Compare Tutors</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {tutors.map(tutor => (
                    <div
                        key={tutor.id}
                        onClick={() => toggleTutor(tutor.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedIds.includes(tutor.id) ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold">{tutor.name}</h3>
                                <p className="text-sm text-gray-500">{tutor.subjects[0]}</p>
                            </div>
                            <div className="ml-auto">
                                {selectedIds.includes(tutor.id) ? <Check className="text-blue-600" /> : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedTutors.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="overflow-x-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-6 border-b dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">Feature</th>
                                {selectedTutors.map(t => (
                                    <th key={t.id} className="p-6 border-b dark:border-gray-800 min-w-[200px]">
                                        <div className="flex items-center gap-3">
                                            <img src={t.image} className="w-10 h-10 rounded-full object-cover" />
                                            <span className="font-bold text-lg">{t.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-6 border-b dark:border-gray-800 font-medium text-gray-500">Subjects</td>
                                {selectedTutors.map(t => (
                                    <td key={t.id} className="p-6 border-b dark:border-gray-800">
                                        <div className="flex flex-wrap gap-1">
                                            {t.subjects.map(s => (
                                                <span key={s} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{s}</span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-6 border-b dark:border-gray-800 font-medium text-gray-500">Price</td>
                                {selectedTutors.map(t => (
                                    <td key={t.id} className="p-6 border-b dark:border-gray-800 font-bold text-blue-600 text-xl">${t.priceRange}/hr</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-6 border-b dark:border-gray-800 font-medium text-gray-500">Experience</td>
                                {selectedTutors.map(t => (
                                    <td key={t.id} className="p-6 border-b dark:border-gray-800">{t.experience} years</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-6 border-b dark:border-gray-800 font-medium text-gray-500">Rating</td>
                                {selectedTutors.map(t => (
                                    <td key={t.id} className="p-6 border-b dark:border-gray-800 flex items-center gap-1">
                                        <span className="font-bold">{t.rating}</span>
                                        <span className="text-yellow-500">★</span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-6 border-b dark:border-gray-800 font-medium text-gray-500">Location</td>
                                {selectedTutors.map(t => (
                                    <td key={t.id} className="p-6 border-b dark:border-gray-800">{t.location}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            )}
            {selectedTutors.length === 0 && (
                <div className="text-center text-gray-500 py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                    Select tutors above to compare them side-by-side.
                </div>
            )}
        </div>
    );
}
