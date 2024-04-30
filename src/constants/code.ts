type SideObject = {class: string, animation: string};

interface Sides {
  LEFT: SideObject;
  RIGHT: SideObject;
}

export const SIDES: Sides = {
  LEFT: { class: 'left', animation: "fade-right" },
  RIGHT: { class: 'right', animation: "fade-left" }
}

interface Languages {
  JAVASCRIPT: string;
  TYPESCRIPT: string;
  HTML: string;
  CSS: string;
}

export const LANGUAGES: Languages = {
  JAVASCRIPT: "language-javascript",
  TYPESCRIPT: "language-typescript",
  HTML: "language-html",
  CSS: "language-css"
}