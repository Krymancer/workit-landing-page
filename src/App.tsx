import type { Component } from "solid-js";

import Home from "@pages/Home";

/**
 * As this is a landing page we don't have any other pages
 * But if we did, we can put a router here or any other 
 * Global scope thingy like state managers or context providers
 */

const App: Component = () => <Home />

export default App;
