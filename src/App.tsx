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
      <Routes />
    </main>
  );
};

export default App;
