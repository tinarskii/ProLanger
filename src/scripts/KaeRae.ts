import { createSignal } from "solid-js";

// User input text
export const [text, setText] = createSignal("");
// Converted text
export const [convertedText, setConvertedText] = createSignal("");

// Convert function
export function convert() {
  setConvertedText(
    text()
      .split("")
      .map((char) => {
        return ("ิีึ์ุูั่้๊๋".includes(char) ? "" : " ") + char;
      })
      .join("")
      .trimStart()
  );
}
