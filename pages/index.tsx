import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";

import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className=" bg-darkgray h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Martina Cumellas Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};
export default Home;
