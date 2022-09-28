import { Component, createEffect, For } from "solid-js";
import { setState, state } from "../lib/createLocalStore";
import {
  convert,
  convertedText,
  layout,
  modes,
  setText,
  text,
} from "../scripts/wrongLang";

const wrongLang: Component = () => {
  createEffect(() => {
    convert();
  });

  return (
    <div class="main-container">
      <div class="page-container">
        {/* Web Title */}
        <div class="title-container">
          <img src="/assets/web.png" alt="W" class="title-img" />
          <span class="title-text">rongLang</span>
        </div>

        {/* Top Bar Elements */}
        <div class="absolute top-2 left-[1/2] translate-x-[1/2]">
          <button onClick={() => window.open("https://www.tinarskii.com/")}>
            Website of <span class="underline">Tinarskii</span>
          </button>
        </div>

        {/* Input Box */}
        <div class="input-container">
          <input
            type="text"
            class="input-box"
            placeholder={"ใส่ข้อความที่ต้องการที่นี่..."}
            value={text()}
            onInput={(e) => setText((e.target as HTMLInputElement).value)}
          />
          <input
            type="text"
            class="input-box"
            placeholder={"ข้อความที่แปลงแล้วจะปรากฎ..."}
            value={convertedText()}
          />
        </div>

        {/* Buttons */}
        <div class="buttons-container">
          <h1 class="buttons-label">Thai Layout</h1>
          <h1 class="buttons-label">English Layout</h1>
          <h1 class="buttons-label">Translation Mode</h1>
          {/* Thai Keyboard Layout */}
          <div class="buttons-group">
            <For each={Object.keys(layout.thai)}>
              {(layout) => (
                <button
                  class={`px-4 py-2 text-white rounded-lg basis-full duration-200 ${
                    state.wrongLang.layout.thai === layout
                      ? "bg-[#168732]"
                      : "bg-blue-700"
                  }`}
                  onClick={() =>
                    setState({
                      ...state,
                      wrongLang: {
                        ...state.wrongLang,
                        layout: { ...state.wrongLang.layout, thai: layout },
                      },
                    })
                  }
                >
                  {layout}
                </button>
              )}
            </For>
          </div>

          {/* English Keyboard Layout */}
          <div class="buttons-group">
            <For each={Object.keys(layout.eng)}>
              {(layout) => (
                <button
                  class={`px-4 py-2 text-white rounded-lg basis-full duration-200 ${
                    state.wrongLang.layout.eng === layout
                      ? "bg-[#168732]"
                      : "bg-blue-700"
                  }`}
                  onClick={() =>
                    setState({
                      ...state,
                      wrongLang: {
                        ...state.wrongLang,
                        layout: { ...state.wrongLang.layout, eng: layout },
                      },
                    })
                  }
                >
                  {layout}
                </button>
              )}
            </For>
          </div>

          {/* Translation Mode */}
          <div class="buttons-group">
            <For each={modes}>
              {(mode) => (
                <button
                  class={`px-4 py-2 text-white rounded-lg basis-full duration-200 ${
                    state.wrongLang.mode === mode
                      ? "bg-[#168732]"
                      : "bg-blue-700"
                  }`}
                  onClick={() => setState({ ...state, wrongLang: { ...state.wrongLang, mode } })}
                >
                  {mode}
                </button>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wrongLang;
