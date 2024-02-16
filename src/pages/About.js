import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { TypeAnimation } from "react-type-animation";
import AnimatedText from "@/components/AnimatedText";
import Transition from "@/components/Transition";

const About = () => {
  return (
    <>
      <Head>
        <title>CB | About</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col justify-center items-center dark:text-white">
        <Layout className="pt-16">
          <div className="mb-16">
            <AnimatedText text="We sell clothes!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          </div>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4">
              <div>
                <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white">
                  About Us
                </h2>
              </div>
              <div className="h-80 overflow-y-auto xl:col-span-8 xl:flex-row">
                <TypeAnimation
                  sequence={[
                    "Welcome to [Store Name], your ultimate destination for fashion that seamlessly combines comfort and style. Explore our curated collection featuring contemporary designs and timeless classics, offering a versatile range for every occasion.",
                    1000,
                    "Our store takes pride in sourcing clothing from both local and international designers, ensuring a unique selection that caters to diverse tastes. From casual everyday wear to sophisticated ensembles, [Store Name] has you covered with quality and individuality.",
                    1000,
                    "Customer satisfaction is at the core of our mission. With a friendly and knowledgeable staff, we are committed to providing a stress-free and enjoyable shopping experience. Discover a world of fashion at [Store Name], where each garment tells a story and reflects your personal style.",
                    1000,
                  ]}
                  wrapper="p"
                  speed={10}
                  repeat={Infinity}
                  className="text-black dark:text-white"
                />
              </div>

            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:border-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <Image
                src={profilePic}
                alt="Cloth Store"
                className="w-full h-auto rounded-2xl"
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
