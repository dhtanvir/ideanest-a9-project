"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-12 
    pb-24 md:pt-24 md:pb-32  from-blue-50 via-slate-50 to-slate-50"
    >
      <Swiper
        navigation
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1  */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-green-300 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>10,000+ Ideas • 45 Countries</span>
                </div>

                <h1
                  className="text-6xl md:text-7xl font-bold tracking-tighter
                 text-gray-600 leading-[1.05]"
                >
                  Your startup idea
                  <br />
                  <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    deserves the spotlight
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg">
                  Share your idea. Get honest feedback from founders, investors
                  & builders. Turn it into reality together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold rounded-2xl bg-white text-black hover:bg-white/90"
                  >
                    Share Your Idea Now
                    <ArrowRight className="ml-2" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold rounded-2xl border-white/30 text-white"
                  >
                    Browse Ideas
                  </Button>
                </div>

                {/* Trust Bar */}
                <div className="flex items-center gap-8 pt-8 opacity-75">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src={`https://i.pravatar.cc/48?img=${i}`}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-slate-900"
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">
                    Joined by{" "}
                    <span className="font-semibold text-white">
                      founders from
                    </span>
                    <br />
                    <span className="text-white">
                      Y Combinator • Google • Shopify
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-cyan-400 rounded-3xl blur-3xl opacity-20" />

                <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
                    alt="Idea Sharing"
                    width={700}
                    height={600}
                    className="rounded-2xl object-cover"
                  />

                  {/* Floating Idea Cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-72 hidden lg:block">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">
                        AI-Powered Farming Drone
                      </span>
                      <span className="text-green-500">↑ 258</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Bangladesh • 15 votes today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2  */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-green-400 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>10,000+ Ideas • 45 Countries</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter
                 text-gray-600 leading-[1.05]">
                  Stop hiding.
                  <br />
                  <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Spotlight your idea.
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg">
                  Share your idea. Get honest feedback from founders, investors
                  & builders. Turn it into reality together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold rounded-2xl bg-white text-black hover:bg-white/90"
                  >
                    Share Your Idea Now
                    <ArrowRight className="ml-2" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold rounded-2xl border-white/30 text-white"
                  >
                    Browse Ideas
                  </Button>
                </div>

                {/* Trust Bar */}
                <div className="flex items-center gap-8 pt-8 opacity-75">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src={`https://i.pravatar.cc/48?img=${i}`}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-slate-900"
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">
                    Joined by{" "}
                    <span className="font-semibold text-white">
                      founders from
                    </span>
                    <br />
                    <span className="text-white">
                      Y Combinator • Google • Shopify
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-cyan-400 rounded-3xl blur-3xl opacity-20" />

                <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1677529498680-fdb9d5ee762a"
                    alt="Idea Sharing"
                    width={700}
                    height={600}
                    className="rounded-2xl object-cover"
                  />

                  {/* Floating Idea Cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-72 hidden lg:block">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">
                        AI-Powered Farming Drone
                      </span>
                      <span className="text-green-500">↑ 248</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Bangladesh • 12 votes today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-green-600 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>10,000+ Ideas • 45 Countries</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter
                 text-gray-500 leading-[1.05]">
                  Your idea deserves
                  <br />
                  <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    the spotlight
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg">
                  Share your idea. Get honest feedback from founders, investors
                  & builders. Turn it into reality together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold rounded-2xl bg-white text-black hover:bg-white/90"
                  >
                    Share Your Idea Now
                    <ArrowRight className="ml-2" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold rounded-2xl border-white/30 text-white"
                  >
                    Browse Ideas
                  </Button>
                </div>

                {/* Trust Bar */}
                <div className="flex items-center gap-8 pt-8 opacity-75">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src={`https://i.pravatar.cc/48?img=${i}`}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-slate-900"
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">
                    Joined by{" "}
                    <span className="font-semibold text-white">
                      founders from
                    </span>
                    <br />
                    <span className="text-white">
                      Y Combinator • Google • Shopify
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-cyan-400 rounded-3xl blur-3xl opacity-20" />

                <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1"
                    alt="Idea Sharing"
                    width={700}
                    height={600}
                    className="rounded-2xl object-cover"
                  />

                  {/* Floating Idea Cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-72 hidden lg:block">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">
                        AI-Powered Farming Drone
                      </span>
                      <span className="text-green-500">↑ 248</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Bangladesh • 12 votes today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
