'use client';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function NotesList({ notes }: { notes: string[] }) {
    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-8">Study Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
                                <FileText size={24} />
                            </div>
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <Download size={20} />
                            </button>
                        </div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{note}</h3>
                        <p className="text-sm text-gray-500 mb-4">PDF Document</p>
                        <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                            Preview
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
