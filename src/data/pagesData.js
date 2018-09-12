// Pages imports:

import Home from "../pages/Home/Home";
import Math from "../pages/Subjects/Math/Math";
import History from "../pages/Subjects/History/History";
import Science from "../pages/Subjects/Science/Science";
import Computer from "../pages/Subjects/Computer/Computer";

//Pages
//Note: the Icon property is the name of the SEMANTIC UI alternative icon

export const pages = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "math",
    path: "/math",
    component: Math
  },
  {
    name: "science",
    path: "/science",
    component: Science
  },
  {
    name: "history",
    path: "/history",
    component: History
  },
  {
    name: "computer",
    path: "/computer",
    component: Computer
  }
];
