import type { Component } from "solid-js";

import LogoDark from '@assets/images/logo-dark.svg';
import LogoLight from '@assets/images/logo-light.svg';
import Button from "@src/components/Button";

const Home : Component = () => {
  return(
    <main>
      <header class="flex flex-row justify-between">
        <LogoDark />
        <Button label="Apply for access" secondary />
      </header>
      <div id="hero" class="flex flex-col gap-10">
        <h1 class="font-fraunces wonky">Data <span>tailored</span> to your needs.</h1>
        <Button label="Learn More" />
      </div>
    </main>
  );
}

export default Home;