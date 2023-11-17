import type { Component } from "solid-js";

import LogoDark from '@assets/images/logo-dark.svg';
import LogoLight from '@assets/images/logo-light.svg';
import HeroImage from '@assets/images/image-hero.webp';
import FacebookIcon from '@assets/images/icon-facebook.svg'
import TwitterIcon from '@assets/images/icon-twitter.svg'
import InstagramIcon from '@assets/images/icon-instagram.svg'
import Founder from '@assets/images/image-founder.webp';

import Button from "@src/components/Button";
import Item from "@src/components/Item";

const Home: Component = () => {
  return (
    <main>
      <div class=" text-white flex flex-col">
        <div class="pt-8 px-4 gap-8  bg-dark-purple relative w-full lg:h-[450px]">
          <header class="flex flex-row justify-between items-center">
            <LogoLight />
            <Button label="Apply for access" secondary />
          </header>
          <div id="hero" class="flex flex-col gap-8">
            <h1 class="font-fraunces wonky text-[3.125rem] text-center">Data <span class="underline decoration-eucaplyptus">tailored</span> to your needs.</h1>
            <div class="flex items-center justify-center w-full pb-16">
              <Button label="Learn More" />
            </div>
          </div>
          <div class="flex items-center w-full justify-center absolute">
            <img src={HeroImage} alt="Hero Image" class="w-[320px] h-[184px] sm:w-[514px] sm:h-[296px] md:w-[29rem] md:h-[16rem] lg:w-[44rem] lg:h-[26rem] z-20" />
          </div>
        </div>
        <div class="md:bg-hero-lg bg-hero-sm sm:bg-hero-md bg-no-repeat bg-bottom h-20 bg-cover bg-ghost-white">
        </div>
      </div>


      <div class="flex flex-col gap-10 relative bg-ghost-white lg:flex-row pt-32  lg:pb-20 lg:px-30 md:pt-64 lg:pt-64 lg:px-6">
        <Item number={1} title="Actionable Insights" content="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics." />
        <Item number={2} title="Data-driven decisions" content="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data." />
        <Item number={3} title="Always affordable" content="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees." />
      </div>

      <div class="md:bg-mid-lg bg-mid-sm sm:bg-mid-md bg-no-repeat bg-bottom h-20 bg-cover bg-white">
      </div>

      <div class="pt-24 w-full flex items-center lg:px-10 md:-mt-36 md:px-8 md:mb-20 lg:mt-0">
        <img src={Founder} alt="Founder" class="-z-10 relative lg:w-[28rem] lg:h-[28rem] md:w-[16rem] md:h-[16rem]" />
        <div class="flex flex-col gap-6 text-center bg-dark-purple -mt-20 z-10 p-8 lg:mt-32 lg:-ml-20 md:-ml-24 md:mt-[19rem]">
          <div class="flex flex-col gap-4" >
            <h2 class="font-fraunces text-[2rem] font-semibold text-white lg:self-start md:self-start">Be the first to test</h2>
            <p class="text-white font-manrope text-center lg:text-start md:text-start">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.</p>
          </div>
          <div class="w-full lg:w-fit lg:self-start md:w-fit md:self-start">
            <Button label="Apply for access" />
          </div>
        </div>
      </div>

      <footer class="flex flex-col items-center justify-center gap-8 w-full lg:py-16">
        <LogoDark />
        <div class="flex flex-row justify-between w-fit gap-4">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </footer>
    </main>
  );
}

export default Home;