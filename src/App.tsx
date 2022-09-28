import type { Component } from 'solid-js';
import {lazy, Show} from "solid-js";
import {setState, state} from "./lib/createLocalStore";
import {Link, Routes, useRoutes} from "@solidjs/router";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./Home")),
  },
  {
    _name: "WrongLang",
    _author: "Tinarskii",
    _authorURL: "https://www.tinarskii.com/",
    _icon: "/assets/web.png",
    _description: "Thai Mutation Language To Normal Thai Translator",
    path: "/wrongLang",
    component: lazy(() => import("./translator/wrongLang"))
  },
  {
    _name: "ใ จ เ ก เ ร",
    _author: "Tinarskii",
    _authorURL: "https://www.tinarskii.com/",
    _icon: "/assets/kazuya.jpg",
    _icon_cover: true,
    _description: "เ ห็ น แ ล้ ว ห วั่ น ไ ห ว เ ล ย ค รั บ",
    path: "/kazuya",
    component: lazy(() => import("./translator/KaeRae"))
  },
]

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <main class={`${ state.darkTheme && "dark" }`}>
      {/* Top Bar Elements */}
      <div class="absolute flex gap-2 top-2 left-2">
        <button onClick={() => setState({...state, darkTheme: !state.darkTheme})}>
          <Show
            when={state.darkTheme}
            fallback={<i class="fa-solid fa-moon text-2xl"/>}
          >
            <i class={`text-2xl fa-solid fa-sun`}/>
          </Show>
        </button>
        <Link href={""}>
          <i class="fa-solid fa-house text-2xl"/>
        </Link>
      </div>

      {/* Bottom Bar Elements */}
      <div class="absolute bottom-4 right-4">
        <div class="flex flex-row gap-2">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wrong-lang.click%2F&quote=สำหรับใครที่ชอบลืมเปลี่ยนภาษาเวลาพิมพ์%20ใช้นี่สิ!">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="App">
            <i class="fa-brands fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
      <Routes />
    </main>
  );
};

export default App;
