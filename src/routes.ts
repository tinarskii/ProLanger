import { lazy } from "solid-js";

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
    _description: "เครื่องมือช่วยแปลภาษาเวลาลืมเปลี่ยนภาษา พร้อมรองรับหลายแป้นพิมพ์!",
    path: "/wrongLang",
    component: lazy(() => import("./translator/wrongLang")),
  },
  {
    _name: "ใ จ เ ก เ ร",
    _author: "Tinarskii",
    _authorURL: "https://www.tinarskii.com/",
    _icon: "/assets/kazuya.jpg",
    _icon_cover: true,
    _description: "เ ห็ น แ ล้ ว ห วั่ น ไ ห ว เ ล ย ค รั บ",
    path: "/kazuya",
    component: lazy(() => import("./translator/KaeRae")),
  },
  {
    _name: "toSkoy",
    _author: "narze",
    _authorURL: "https://narze.live/",
    _description: "เเอปเเปลงพ๊ษ๊ไธญเป็นภ๊ษ๊สก๊อบ์ย (รุ่นใหฒ่ล่๊ษุฎ)",
    path: "/toSkoy",
    component: lazy(() => import("./translator/toSkoy")),
  },
];
