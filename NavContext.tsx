import { createContext, useContext } from "react";

export type Page = "home" | "about" | "contact";

interface NavCtxType {
  page: Page;
  navigate: (p: Page) => void;
}

export const NavCtx = createContext<NavCtxType>({ page: "home", navigate: () => {} });
export const useNav = () => useContext(NavCtx);
