import React from "react";
import PageLayout from "./components/globalcomponents/PageLayout";
import { Metadata } from "next";
import HeroSection from "./components/pagecomponents/landingpage/HeroSection";
import Partners from "./components/pagecomponents/landingpage/Partners";
import Contact from "./components/pagecomponents/landingpage/Contact";
import LatestEvents from "./components/pagecomponents/landingpage/LatestEvents";
import FAQs from "./components/pagecomponents/landingpage/FAQs";
import Testimonials from "./components/pagecomponents/landingpage/Testimonials";
import Blogs from "./components/pagecomponents/landingpage/Blogs";
import Stats from "./components/pagecomponents/landingpage/Stats";
import Podcasts from "./components/pagecomponents/landingpage/Podcasts";

export const metadata: Metadata = {
  title: "Outsmash",
  keywords: "Outsmash, event, event listing, students",
  openGraph: {
    title: "Outsmash",
    description:
      "Our mission at Outsmash is to empower students by providing seamless access to information about extra-curricular and co-curricular activities.",
    images: "/images/og-landing.png",
  },
};

const Home: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-light">
        <HeroSection />
        <Partners />
        <LatestEvents />
        <Podcasts />
        <Stats />
        {/* <Testimonials /> */}
        <Blogs />
        <FAQs />
        <Contact />
      </main>
    </PageLayout>
  );
};

export default Home;
