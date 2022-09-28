import type { Component } from "solid-js";
import { Show } from "solid-js";
import { setState, state } from "./lib/createLocalStore";
import { Link, Routes, useRoutes } from "@solidjs/router";
import { routes } from "./routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <main class={`${state.darkTheme && "dark"}`}>
      {/* Top Bar Elements */}
      <div class="absolute flex gap-2 top-2 left-2">
        <button
          onClick={() => setState({ ...state, darkTheme: !state.darkTheme })}
        >
          <Show
            when={state.darkTheme}
            fallback={<i class="fa-solid fa-moon text-2xl" />}
          >
            <i class={`text-2xl fa-solid fa-sun`} />
          </Show>
        </button>
        <Link href={""}>
          <i class="fa-solid fa-house text-2xl" />
        </Link>
      </div>

      {/* Bottom Bar Elements */}
      <div class="absolute bottom-4 right-4">
        <div class="flex flex-row gap-2">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprolanger.wrong-lang.click%2F&quote=Create your own weird text translator!">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="https://twitter.com/intent/tweet/?text=Create your own weird text translator!&hashtags=wronglang&via=tinarskii&related=&url=https://prolanger.wrong-lang.click/">
            <i class="fa-brands fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
      <Routes />
    </main>
  );
};

export default App;
