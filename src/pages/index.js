import React, {useEffect} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import {useColorMode} from '@docusaurus/theme-common';

// wwwsite.landing-index/Hero [152] 
function Hero(){
  return (
    <section className="bg-background text-gray-100">
      <div
        className="container flex flex-col justify-center lg:flex-row lg:justify-between lg:py-24 mx-auto p-6 sm:py-12">
        <div
          className="flex flex-col justify-center lg:max-w-md lg:text-left p-6 rounded-sm text-center xl:max-w-lg">
          <h1 className="font-bold leading-none sm:text-6xl text-5xl">
            <span className="text-primary">Your </span>
             Tokens.
            <br></br>
            Your 
            <span className="text-primary"> Market.</span>
          </h1>
          <p className="mb-8 mt-6 sm:mb-12 text-lg">Be your own Exchange with our Smart Contract Clearinghouse</p>
          <div
            className="flex flex-col lg:justify-start sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 space-y-4">
            <a
              rel="noopener noreferrer"
              href="#"
              className="btn btn-primary text-gray-900 font-semibold px-8 rounded text-lg">Contact Us
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="btn border border-gray-100 font-semibold px-8 rounded text-lg">Demo
            </a>
          </div>
        </div>
        <div
          className="2xl:h-128 flex h-72 items-center justify-center lg:h-96 lg:mt-0 mt-8 sm:h-80 rounded xl:h-112">
          <div className="avatar">
            <div
              className="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-10"><img src="exchange-raw.png"></img>
            </div>
          </div>
        </div>
      </div>
    </section>);
}


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageForceDark(){
    const {colorMode, setColorMode} = useColorMode();
    useEffect(
        function () {
            console.log(colorMode)
            if (colorMode != "dark")
                setColorMode("dark")
        }
    );
    return (<div></div>);
}


export default function Home() {
    const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
        <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
