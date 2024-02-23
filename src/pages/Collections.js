import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import ClothingCard from "./ClothingCard";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const clothingItems = [
    {
      id: 1,
      title: "Blue Summer Top",
      image: "/images/projects/devdreaming.jpg",
      category: "Tops",
      description: "This is a top"
    },
    {
      id: 2,
      title: "Elegant Black Gown",
      image: "/images/projects/nft-collection-website-cover-image.jpg",
      category: "Gowns",
      description: "This is a gown"
    },
    {
      id: 3,
      title: "Floral Print Dress",
      image: "/images/projects/portfolio-cover-image.jpg",
      category: "Dresses",
      description: "This is a Dress"
    },
    // Add more clothing items as needed
  ];

  const filteredClothingItems =
    selectedCategory === "All"
      ? clothingItems
      : clothingItems.filter((item) => item.category === selectedCategory);

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [selectedCategory]);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Collections | Tutored Outfits</title>
        <meta
          name="description"
          content="Explore our collection of clothing items"
        />
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
      <main >
        <h2 className="text-center lg:pt-6 md:pt-6 sm:pt-5 xs:pt-5 text-4xl font-bold text-black mt-16 mb-4 dark:text-white">
          Collections
        </h2>
        <Layout className="pt-16">
          <div className="mx-12">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full p-2 border border-gray-300 focus:outline-none font-semibold font-sans focus:border-blue-500w-full px-2 py-1 text-base rounded-md mb-1rem"
            >
              <option value="All">All</option>
              <option value="Tops">Tops</option>
              <option value="Gowns">Gowns</option>
              <option value="Dresses">Dresses</option>
            </select>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-10 mt-4">
              {filteredClothingItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  ref={index === 0 ? ref : null}
                >
                  <ClothingCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.image}
                    category={item.category}
                    description = {item.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Collections;
