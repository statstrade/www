import React, {useEffect} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import {useColorMode} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';

// wwwsite.landing-index/Hero [152] 
function Hero(){
  return (
    <section className="bg-background text-gray-100">
      <div
        className="container flex flex-col justify-center lg:flex-row lg:justify-between lg:py-24 mx-auto p-6 sm:py-12">
        <div
          className="flex flex-col justify-center lg:max-w-md lg:text-left p-6 rounded-sm text-center xl:max-w-lg">
          <h1 className="font-bold leading-none sm:text-6xl text-5xl">
              <span className="text-primary"><Translate>My</Translate></span>
              <span className="text-primary"> </span>
             <Translate>Tokens</Translate>.
            <br></br>
              <Translate>My</Translate>
              <span className="text-primary"> </span>
              <span className="text-primary"><Translate>Market</Translate></span>
              <span className="text-primary">.</span>
          </h1>
            <p className="mb-8 mt-6 sm:mb-12 text-lg">
                <Translate>
                    Build your Custom Exchange with our Smart Contract Clearinghouse
                </Translate>
                </p>
          <div
            className="flex flex-col lg:justify-start sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 space-y-4">
              <a rel="noopener noreferrer"
                 href="/docs/intro"
                 className="btn btn-primary px-8 rounded text-md">
                  <Translate>
                      Getting Started
                  </Translate>
              </a>
              <a rel="noopener noreferrer"
                 href="https://testnet.statstrade.io"
                 className="btn btn-outline  px-8 rounded text-md">
                  <Translate>
                      Try our Demo
                  </Translate>
              </a>
          </div>
        </div>
        <div
          className="2xl:h-128 flex h-72 items-center justify-center lg:h-96 lg:mt-0 mt-8 sm:h-80 rounded xl:h-112">
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-10">
                <div style={{"height": "196px", "width": "196px"}} />
            </div>
          </div>
        </div>
      </div>
    </section>);
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const desc=translate({message: "Create your own crypto markets"})
  const suffix=translate({message: "Markets on Blockchain"})  
  return (
    <Layout
        title={`${siteConfig.title} | ${suffix}`}
      description={desc}
    >
     <main>
        <Hero />
      </main>
    </Layout>
  );
}

/*
  <HomepageFeatures />
*/
