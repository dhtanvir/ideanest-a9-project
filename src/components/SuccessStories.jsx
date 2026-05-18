import Image from 'next/image';
import React from 'react';

const SuccessStories = () => {
    const stories = [
        {
            id: 1,
            name: "Rahim Ahmed",
            location: "Dhaka",
            title: "KrishiBot - AI Voice Assistant for Farmers",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600",
            achievement: "Raised $280K | Serving 18,000+ farmers",
            quote: "This platform gave me my first co-founder and investor.",
            revenue: "৳2.5 Crore+ Exit"
        },
        {
            id: 2,
            name: "Sadaf Khan",
            location: "Chittagong",
            title: "PeriodPal - Menstrual Health Tracker",
            image: "https://plus.unsplash.com/premium_photo-1682146720153-4d5bdf56f143",
            achievement: "85,000+ users | Raised $150K",
            quote: "Finally got support from women investors who understood my vision.",
        },
        {
            id: 3,
            name: "Tanvir Hossain",
            location: "Sirajganj",
            title: "RideBangla - EV Rickshaw Booking",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            achievement: "450+ vehicles | 380+ jobs created",
            quote: "Started with 12 rickshaws in my hometown.",
        },
        {
            id: 4,
            name: "Priya Das",
            location: "Rajshahi",
            title: "SkillShikho - Local Skill Courses",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
            achievement: "42,000 students | ৳87 Lakh revenue",
            quote: "Bootstrapped to profitability in 14 months.",
        }
    ];

    const featuredStory = stories[0];
    const regularStories = stories.slice(1);

    return (
        <section className="py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Success Stories
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real founders. Real ideas. Real impact from our community.
                    </p>
                </div>

                {/* Featured Story */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-96 md:h-full">
                            <Image
                                src={featuredStory.image}
                                alt={featuredStory.name}
                                className="w-full h-full object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Featured
                            </div>
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="text-green-600 font-semibold tracking-wide text-sm">FROM IDEA TO EXIT</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                From a simple post to {featuredStory.revenue}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium text-lg">
                                {featuredStory.title}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Rahim posted his idea for an AI Bangla voice assistant for farmers. 
                                Within months, he found co-founders, investors, and built <strong>KrishiBot</strong>.
                            </p>
                            <div className="mb-8 border-l-4 border-green-500 pl-4">
                                <p className="italic text-gray-700 dark:text-gray-200">
                                    {featuredStory.quote}
                                </p>
                                <p className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    — {featuredStory.name}, {featuredStory.location}
                                </p>
                            </div>
                            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all w-fit">
                                Read Full Story →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Other Stories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {regularStories.map((story) => (
                        <div key={story.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                            <div>
                                <div className="h-48 overflow-hidden relative">
                                    <Image
                                        src={story.image} 
                                        alt={story.name} 
                                        className="w-full h-full object-cover"
                                        width={500}
                                        height={300}
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                                        {story.location}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {story.title}
                                    </h4>
                                    <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-4">
                                        {story.achievement}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                        {story.quote}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700 mt-4 flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    By {story.name}
                                </span>
                                <button className="text-sm font-semibold text-gray-900 dark:text-white hover:underline">
                                    Read Story →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "187+", label: "Ideas Turned into Startups" },
                        { number: "$4.2M+", label: "Total Funding Raised" },
                        { number: "68%", label: "Found Co-founder Here" },
                        { number: "12", label: "Successful Exits" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700">
                            <h5 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                                {stat.number}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;