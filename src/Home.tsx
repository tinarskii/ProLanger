import { Component, For, Show } from "solid-js";
import { Link } from "@solidjs/router";
import { routes } from "./routes";

const Home: Component = () => {
  return (
    <>
      <div class="main-container">
        <div class="page-container">
          {/* Web Title */}
          <div class="title-container">
            <img src="/prolanger.png" alt="W" class="title-img" />
            <span class="title-text">roLanger</span>
          </div>

          {/* Top Bar Elements */}
          <div class="absolute top-2 left-[1/2] translate-x-[1/2]">
            <button onClick={() => window.open("https://www.tinarskii.com/")}>
              Website of <span class="underline">Tinarskii</span>
            </button>
          </div>

          {/* Translator List */}
          <div class="grid md:grid-cols-4 md:px-16 px-4 grid-cols-2 gap-6">
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
                        <b>{route._name}</b> by {route._author}
                      </p>
                      {route._description ??
                        "It seems like this translator doesn't have a description. Why not just try it out?"}
                      <div class="flex flex-row gap-4">
                        <Link
                          href={route.path}
                          class="bg-blue-700 px-4 py-2 rounded-lg"
                        >
                          Visit
                        </Link>
                        <button onClick={() => window.open(route._authorURL)}>
                          About Author
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
                  Add your own translator!
                </p>
                <div class="flex flex-row w-full justify-center items-center gap-4">
                  <button
                    onClick={() =>
                      window.open("https://github.com/wrong-lang/prolanger")
                    }
                    class="bg-[#168732] px-4 py-2 rounded-lg text-white"
                  >
                    Add
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Bar Elements */}
          <div class="absolute bottom-4 right-4">
            <div class="flex flex-row gap-2">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wrong-lang.click%2F&quote=สำหรับใครที่ชอบลืมเปลี่ยนภาษาเวลาพิมพ์%20ใช้นี่สิ!">
                <i class="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a href="App">
                <i class="fa-brands fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
