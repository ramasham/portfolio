import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GitHub } from "./components/GitHub";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "github", Component: GitHub },
      { path: "contact", Component: Contact },
    ],
  },
]);