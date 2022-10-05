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

// Copy to Clipboard
export function copyToClipboard(evt: HTMLInputElement|any, cTxt: string, cpTxt?: string): void {
  navigator.clipboard.writeText(cTxt);
  alert(cpTxt || "คัดลอกแล้ว");
}