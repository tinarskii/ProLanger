import { Component, For, Show } from "solid-js";
import { Link } from "@solidjs/router";
import { routes } from "./routes";

const Home: Component = () => {
  return (
    <>
      <div class="main-container">
        <div class="page-container">
          {/* Web Title */}
          <div class="flex flex-col gap-2">
            <div class="title-container">
              <img src="/prolanger.png" alt="W" class="title-img" />
              <span class="title-text">roLanger</span>
            </div>
            <h1 class="text-center text-gray-500">เว็บรวบรวมโปรแกรมแปลภาษาต่าง ๆ</h1>
          </div>

          {/* Top Bar Elements */}
          <div class="absolute top-2 left-[1/2] translate-x-[1/2]">
            <button onClick={() => window.open("https://www.tinarskii.com/")}>
              Website of <span class="underline">Tinarskii</span>
            </button>
          </div>

          {/* Translator List */}
          <div class="grid md:px-16 px-4 grid-cols-2 gap-6">
            <For each={routes}>
              {(route, idx) => (
                <Show when={route._name}>
                  <section
                    class={`bg-white/90 rounded-lg bg-center bg-no-repeat ${
                      route._icon_cover ? "bg-cover" : "bg-contain"
                    } text-white`}
                    style={{ "background-image": `url('${route._icon}')` }}
                  >
                    <div class="w-full h-full gap-4 flex flex-col justify-center rounded-lg bg-black/70 p-6">
                      <p class="text-xl">
                        <b>{route._name}</b> โดย {route._author}
                      </p>
                      {route._description ??
                        "ไม่มีคำอธิบายเพิ่มเติม ทำไมไม่ลองใช้ดูเลยหล่ะ?"}
                      <div class="flex flex-row gap-4">
                        <Link
                          href={route.path}
                          class="bg-blue-700 px-4 py-2 rounded-lg"
                        >
                          เข้าชม
                        </Link>
                        <button onClick={() => window.open(route._authorURL)}>
                          ดูผู้พัฒนา
                        </button>
                      </div>
                    </div>
                  </section>
                </Show>
              )}
            </For>
            <section class="dark:bg-white/10 bg-black/10 rounded-lg bg-center bg-no-repeat bg-contain">
              <div class="w-full h-full gap-4 flex flex-col justify-center items-center rounded-lg p-6">
                <p class="text-xl dark:text-white text-black">
                  เพิ่มโปรแกรมแปลภาษาเองเลย!
                </p>
                <div class="flex flex-row w-full justify-center items-center gap-4">
                  <button
                    onClick={() =>
                      window.open("https://github.com/wrong-lang/prolanger")
                    }
                    class="bg-[#168732] px-4 py-2 rounded-lg text-white"
                  >
                    เพิ่ม
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
