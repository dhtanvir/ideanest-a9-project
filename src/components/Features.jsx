import { Users, TrendingUp, Lightbulb, Award, Shield, Handshake } from "lucide-react";

const Features = () => {
    const IdeasItems = [
        {
            icon: Users,
            title: 'Vibrant Community',
            desc: 'Connect with thousands of aspiring founders, entrepreneurs, and innovators across Bangladesh.',
        },
        {
            icon: TrendingUp,
            title: 'Trending & Validation',
            desc: 'Get real feedback from the community. See which ideas are trending and gaining traction.',
        },
        {
            icon: Lightbulb,
            title: 'Idea Spotlight',
            desc: 'Your ideas get proper visibility. Top ideas get featured and reach potential investors.',
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-4 mb-16">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">OUR BENEFITS</h2>
                    <h3 className="text-4xl font-extrabold
                     text-slate-900">Why Choose IdeaNest?</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        The ultimate platform to share, validate, and grow your startup ideas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {IdeasItems.map((f, i) => (
                        <div
                            key={i}
                            className="group p-8 bg-white border border-slate-200 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center space-y-6"
                        >
                            <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <f.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800">{f.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;