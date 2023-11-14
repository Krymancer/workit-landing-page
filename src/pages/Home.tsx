import type { Component } from "solid-js";

import LogoDark from '@assets/images/logo-dark.svg';
import LogoLight from '@assets/images/logo-light.svg';
import HeroImage from '@assets/images/image-hero.webp';
import FacebookIcon from '@assets/images/icon-facebook.svg'
import TwitterIcon from '@assets/images/icon-twitter.svg'
import InstagramIcon from '@assets/images/icon-instagram.svg'
import Founder from '@assets/images/image-founder.webp';

import Button from "@src/components/Button";

const Home: Component = () => {
  return (
    <main>
      <div class=" text-white py-8 px-4 gap-8 flex flex-col bg-hero bg-no-repeat bg-ghost-white">
        <header class="flex flex-row justify-between items-center">
          <LogoLight />
          <Button label="Apply for access" secondary />
        </header>
        <div id="hero" class="flex flex-col gap-8">
          <h1 class="font-fraunces wonky text-[3.125rem] text-center">Data <span class="underline decoration-eucaplyptus">tailored</span> to your needs.</h1>
          <div class="flex items-center justify-center w-full">
            <Button label="Learn More" />
          </div>
        </div>
        <img src={HeroImage} alt="Hero Image" class="w-full" />
      </div>

      <div class="flex flex-col gap-10 bg-items bg-cover">
        <div class="flex flex-col gap-6 justify-center items-center">
          <span class="font-fraunces rounded-full border w-12 h-12 flex items-center justify-center border-black text-xl">1</span>
          <div class="flex flex-col gap-4 items-center text-center px-4">
            <h2 class="font-bold font-fraunces text-[1.75rem]">Actionable Insights</h2>
            <p class="text-davys-grey font-manrope">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
          </div>
        </div>

        <div class="flex flex-col gap-6 justify-center items-center">
          <span class="font-fraunces rounded-full border w-12 h-12 flex items-center justify-center border-black text-xl">2</span>
          <div class="flex flex-col gap-4 items-center text-center px-4">
            <h2 class="font-bold font-fraunces text-[1.75rem]">Data-driven decisions</h2>
            <p class="text-davys-grey font-manrope">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
          </div>
        </div>

        <div class="flex flex-col gap-6 justify-center items-center">
          <span class="font-fraunces rounded-full border w-12 h-12 flex items-center justify-center border-black text-xl">3</span>
          <div class="flex flex-col gap-4 items-center text-center px-4">
            <h2 class="font-bold font-fraunces text-[1.75rem]">Always affordable</h2>
            <p class="text-davys-grey font-manrope">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
          </div>
        </div>
      </div>

      <div>
        <img src={Founder} alt="Founder" class="-z-10 relative" />
        <div class="flex flex-col gap-6 text-center bg-dark-purple -mt-20 z-10 p-8">
          <div class="flex flex-col gap-4">
          <h2 class="font-fraunces text-[2rem] font-semibold text-white">Be the first to test</h2>
          <p class="text-white font-manrope text-center">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.</p>
          </div>
          <Button label="Apply for access" />
        </div>
      </div>

      <footer class="flex flex-col items-center justify-center gap-8 w-full">
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