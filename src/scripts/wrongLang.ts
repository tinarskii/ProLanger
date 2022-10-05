// Local Storage store
import { createSignal } from "solid-js";
import { setState, state } from "../lib/createLocalStore";

// User input text
export const [text, setText] = createSignal("");
// Converted text
export const [convertedText, setConvertedText] = createSignal("");

// Thai layout name
export const thLayoutName = {
  Kedmanee: "เกษมณี",
  Pattachotee: "ปัตตะโชติ",
  Manoonchai: "มนูญชัย",
  Qwerty: "เควอร์ตี",
  Dvorak: "ดีโวแร็ค",
  Colemak: "โคล์เม็ค",
};

// Thai mode name
export const thMode = {
  "To Thai": "เป็นไทย",
  "To English": "เป็นอังกฤษ",
  Unshift: "ยกเลิกตรึงอักษร",
};

// Available keyboard layout
export const layout = {
  // Thai keyboard layout
  thai: {
    Kedmanee: {
      normal: "_ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ".split(""),
      shift: '%+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ'.split(""),
    },
    Pattachotee: {
      normal: "_=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ".split(""),
      shift: '฿+"/,?ุ_.()-%๊ฤๆญษึฝซถฒฯฦํ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ'.split(""),
    },
    Manoonchai: {
      normal: "`1234567890-=ใตหลสปักิบ็ฬฯงเรนมอา่้วืุไทยจคีดะู".split(""),
      shift: '~!@#$%^&*()_+ฒฏซญฟฉึธฐฎฆฑฌษถแชพผำขโภ"ฤฝๆณ๊๋์ศฮ?'.split(""),
    },
  },
  // English keyboard layout
  eng: {
    Qwerty: {
      normal: "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,.".split(""),
      shift: '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'.split(""),
    },
    Dvorak: {
      normal: "1234567890[]',.pyfgcrl/=\\aoeuidhtns-;qjkxbmwvz".split(""),
      shift: '!@#$%^&*(){}"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ'.split(""),
    },
    Colemak: {
      normal: "1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./".split(""),
      shift: '!@#$%^&*()_+QWFGPJLUY:{}|ARSTDHNEIO"ZXCVBKM<>?'.split(""),
    },
  },
};

// Available modes
export const modes = ["To Thai", "To English", "Unshift"];

// Convert function
export function convert() {
  if (state.wrongLang.mode === "To Thai") {
    setConvertedText(
      text()
        .split("")
        .map((char) => {
          return (
            layout.thai[state.wrongLang.layout.thai].shift.concat(
              layout.thai[state.wrongLang.layout.thai].normal
            )[
              layout.eng[state.wrongLang.layout.eng].shift
                .concat(layout.eng[state.wrongLang.layout.eng].normal)
                .indexOf(char)
              ] || char
          );
        })
        .join("")
    );
  }

  if (state.wrongLang.mode === "To English") {
    setConvertedText(
      text()
        .split("")
        .map((char) => {
          return (
            layout.eng[state.wrongLang.layout.eng].shift.concat(
              layout.eng[state.wrongLang.layout.eng].normal
            )[
              layout.thai[state.wrongLang.layout.thai].shift
                .concat(layout.thai[state.wrongLang.layout.thai].normal)
                .indexOf(char)
              ] || char
          );
        })
        .join("")
    );
  }

  if (state.wrongLang.mode === "Unshift") {
    setConvertedText(
      text()
        .split("")
        .map((char) => {
          return (
            layout.thai[state.wrongLang.layout.thai].shift[
              layout.thai[state.wrongLang.layout.thai].normal.indexOf(char)
              ] ||
            layout.thai[state.wrongLang.layout.thai].normal[
              layout.thai[state.wrongLang.layout.thai].shift.indexOf(char)
              ] ||
            char
          );
        })
        .join("")
    );
  }
}

// Copy to Clipboard
export function copyToClipboard(evt: HTMLInputElement|any, cTxt: string, cpTxt?: string): void {
  navigator.clipboard.writeText(cTxt);
  alert(cpTxt || "คัดลอกแล้ว");
}