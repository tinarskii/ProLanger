import { Component, createEffect } from "solid-js";
import {
  convert,
  convertedText,
  copyToClipboard,
  setText,
  text,
} from "../scripts/toSkoy";

const toSkoy: Component = () => {
  createEffect(() => {
    convert();
  });

  return (
    <div class="main-container">
      <div class="page-container">
        {/* Web Title */}
        <div class="title-container">
          <span class="title-text">toSkoy</span>
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
          <input
            type="button"
            class="w-full p-2 bg-transparent rounded-lg text-blue-500 border-2 border-blue-500 active:bg-blue-500 active:text-white duration-200"
            value="ก๊อป"
            onClick={(e) => copyToClipboard(e.target as HTMLInputElement, convertedText())}
          />
        </div>
      </div>
    </div>
  );
};

export default toSkoy;
