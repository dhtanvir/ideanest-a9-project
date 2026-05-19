

import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SuccessStories from "@/components/SuccessStories";
import TopIdeaMakers from "@/components/TopIdeaMakers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses/>
      {/* <Features /> */}
      <SuccessStories/>
      <TopIdeaMakers/>
    </div>
  );
}
