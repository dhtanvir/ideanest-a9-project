import Image from 'next/image';
import React from 'react';

const TopIdeaMakers = () => {
    
    const makers = [
        {
            id: 1,
            name: "Anika Rahman",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            role: "AI & Tech Enthusiast",
            location: "Dhaka",
            ideasCount: 14,
            upvotes: "1.2k",
            topIdea: "MedChain - Blockchain-based Electronic Health Records",
            badge: "🏆 Top Innovator"
        },
        {
            id: 2,
            name: "Asif Istiak",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            role: "Sustainability Thinker",
            location: "Sylhet",
            ideasCount: 9,
            upvotes: "840",
            topIdea: "JutePack - Biodegradable Packaging Solutions for E-commerce",
            badge: "🌱 Green Pioneer"
        },
        {
            id: 3,
            name: "Fariha Zaman",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
            role: "FinTech Researcher",
            location: "Khulna",
            ideasCount: 11,
            upvotes: "710",
            topIdea: "GramPay - Micro-loans for Rural Women Entrepreneurs",
            badge: "⚡ Rising Star"
        }
    ];

    return (
        <section className="py-16 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-green-600 dark:text-green-400 tracking-widest uppercase block mb-2">
                        Community Leaders
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Top Idea Makers
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Meet the brilliant minds sharing the most upvoted and impactful ideas in our ecosystem.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-8">
                    {makers.map((maker) => (
                        <div 
                            key={maker.id} 
                            className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 relative flex flex-col justify-between"
                        >
                            {/* Top Badge */}
                            <div className="absolute top-6 right-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-semibold">
                                {maker.badge}
                            </div>

                            {/* Profile Info */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <Image 
                                        src={maker.avatar} 
                                        alt={maker.name} 
                                        className="w-16 h-16 rounded-2xl object-cover border-2 border-green-500"
                                        width={64}
                                        height={64}
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {maker.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            {maker.role} • {maker.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats Mini-Row */}
                                <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 mb-6">
                                    <div className="text-center border-r border-gray-200 dark:border-gray-700">
                                        <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                            {maker.ideasCount}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                                            Ideas Shared
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-green-600 dark:text-green-400">
                                            {maker.upvotes}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                                            Total Upvotes
                                        </p>
                                    </div>
                                </div>

                                {/* Top Idea Feature */}
                                <div className="mb-6">
                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">
                                        Best Concept
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                                        {maker.topIdea}
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                <button className="text-sm font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                                    View All Ideas
                                </button>
                                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all">
                                    Follow
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopIdeaMakers;