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
    _description: "Thai Mutation Language To Normal Thai Translator",
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
];
