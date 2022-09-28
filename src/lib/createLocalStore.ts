import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { createEffect } from "solid-js";
import { opt } from "./options";

export function createLocalStore<T>(
  initState: T
): [Store<T>, SetStoreFunction<T>] {
  const [state, setState] = createStore(initState);
  if (localStorage["pro-lang-settings"])
    setState(JSON.parse(localStorage["pro-lang-settings"]));
  createEffect(
    () => (localStorage["pro-lang-settings"] = JSON.stringify(state))
  );
  return [state, setState];
}

export const [state, setState] = createLocalStore({
  ...opt,
  darkTheme: false,
});
