import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

export default defineConfig({
  base: "/indiedev-docs",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  title: "Learn-web-with-me",
  description:
    "This is free web development guide platform for future developers",
  appearance: "dark",
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Harish R",
    },
    aside: true,
    outline: {
      label: "on this page",
      level: [1, 2],
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Learning", link: "/learning/" },
      { text: "Syntax-sheet", link: "/syntax-sheet/" },
      { text: "Errors lab", link: "/errors-lab/" },
    ],

    sidebar: {
      "/learning/": [
        {
          text: "TypeScript",
          collapsed: false,
          items: [
            {
              text: "Introduction",
              link: "/learning/typescript/introduction",
            },
            { text: "Installation", link: "/learning/typescript/installation" },
            { text: "Basic Types", link: "/learning/typescript/basic-types" },
          ],
        },
        {
          text: "React",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/learning/react/introduction" },
            { text: "Installation", link: "/learning/react/installation" },
            { text: "react basics", link: "/learning/react/basics" },
          ],
        },
        {
          text: "HTML",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/learning/html/introduction" },
            { text: "Installation", link: "/learning/html/installation" },
            { text: "Basic Types", link: "/learning/html/basic-types" },
          ],
        },
      ],

      "/syntax-sheet/": [
        {
          text: "TypeScript Syntax",
          items: [
            {
              text: "Basic Syntax",
              link: "/syntax-sheet/typescript/syntax-sheet",
            },
          ],
        },
        {
          text: "React Syntax",
          items: [
            { text: "JSX Elements", link: "/syntax-sheet/react/jsx-syntax" },
          ],
        },
      ],

      "/errors-lab/": [
        {
          text: "TypeScript Errors",
          items: [
            { text: "Common Errors", link: "/errors-lab/typescript/error" },
          ],
        },
        {
          text: "React Errors",
          link: "/errors-lab/react/error",
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/harishravit/indidev.git",
      },
    ],
  },
});
