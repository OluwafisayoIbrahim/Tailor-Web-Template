import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import AnimatedText from "@/components/AnimatedText";
import Transition from "@/components/Transition";
import AboutPic from "@/components/AboutPic";


const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="any description" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
      <Transition />
      <main className="flex w-full flex-col justify-center items-center dark:text-white">
        <Layout className="pt-16 md:pt-20 sm:pt-24 xs:pt-28">
          <AnimatedText
            text="About Us"
            className="mb-16 lg:text-6xl lg:mt-8 md:text-5xl md:mt-6 sm:text-3xl sm:mt-4 xs:text-2xl xs:mt-2 sm:mb-8 text-center"
          />

          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-6 sm:col-span-6 md:col-span-4 xs:col-span-2">
              <div>
                <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white">
                  Hello There 👋
                </h2>
              </div>
              <div className="h-80 w-full lg:w-auto xl:w-full md:w-80 xs-w-80 sm:w-80 overflow-hidden xl:col-span-8 xl:flex-row">
              <TypeAnimation
                  sequence={[
                    "Welcome to Tutored Outfits, your ultimate destination for fashion that seamlessly combines comfort and style. Explore our curated collection featuring contemporary designs and timeless classics, offering a versatile range for every occasion.",
                    1000,
                    "Our store takes pride in sourcing clothing from both local and international designers, ensuring a unique selection that caters to diverse tastes. From casual everyday wear to sophisticated ensembles, Tutored Outfits has you covered with quality and individuality.",
                    1000,
                    "Customer satisfaction is at the core of our mission. With a friendly and knowledgeable staff, we are committed to providing a stress-free and enjoyable shopping experience. Discover a world of fashion at Tutored Outfits, where each garment tells a story and reflects your personal style.",
                    1000,
                  ]}
                  wrapper="p"
                  speed={10}
                  repeat={Infinity}
                  className="text-black dark:text-white "
                />
              </div>
            </div>
            {/* <AboutPic /> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
