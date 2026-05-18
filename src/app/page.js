

import Hero from "@/components/Hero";
import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FeaturedCourses /> */}
      {/* <Features /> */}
      <SuccessStories/>
    </div>
  );
}
