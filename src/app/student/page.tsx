'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Video } from 'lucide-react';

export default function StudentDashboard() {
    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-8">Welcome back, Student!</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-600/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="opacity-80" />
                        <h3 className="font-bold">Upcoming Session</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1">Calculus II</p>
                    <p className="opacity-80">Today, 4:00 PM</p>
                </div>

                <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg shadow-purple-600/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="opacity-80" />
                        <h3 className="font-bold">Hours Learned</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1">24.5 Hours</p>
                    <p className="opacity-80">This month</p>
                </div>

                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg shadow-emerald-600/20">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="opacity-80" />
                        <h3 className="font-bold">Courses</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1">4 Active</p>
                    <p className="opacity-80">View all</p>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 border-b border-gray-100 dark:border-gray-800 last:border-0 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Video size={20} />
                            </div>
                            <div>
                                <p className="font-medium">Physics Session with David Chen</p>
                                <p className="text-sm text-gray-500">Yesterday, 2:00 PM</p>
                            </div>
                        </div>
                        <button className="text-sm font-medium text-blue-600 hover:underline">View Recording</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
