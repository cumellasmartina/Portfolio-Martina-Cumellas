import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#424043] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Martina Cumellas Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};
export default Home;
