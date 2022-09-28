import { Component, createEffect, For, Show } from "solid-js";
import {convertedText, setConvertedText, setText, text} from "../scripts/KaeRae";

const wrongLang: Component = () => {
  createEffect(() => {
    setConvertedText(text().split("").map(char => {
      return char + " ";
    }).join(""));
  });

  return (
    <div class="main-container">
      <div class="page-container">
        {/* Web Title */}
        <div class="title-container">
          <span class="title-text">💛ใ จ เ ก เ ร💀</span>
        </div>

        {/* Top Bar Elements */}
        <div class="absolute top-2 left-[1/2] translate-x-[1/2]">
          <button onClick={() => window.open("https://www.tinarskii.com/")}>
            Website of <span class="underline">Tinarskii</span>
          </button>
        </div>

        {/* Input Box */}
        <div class="input-container">
          <input type="text" class="input-box" placeholder={"ใส่ข้อความที่ต้องการที่นี่..."} value={text()}
                 onInput={e => setText(e.target.value)}/>
          <input type="text" class="input-box" placeholder={"ข้อความที่แปลงแล้วจะปรากฎ..."} value={convertedText()}/>
        </div>
      </div>
    </div>
  );
};

export default wrongLang;
