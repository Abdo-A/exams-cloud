// Pages imports:

import ComputerPage from "../pages/Subjects/Computer/ComputerPage";
import HistoryPage from "../pages/Subjects/History/HistoryPage";
import Home from "../pages/Home/Home";
import MathPage from "../pages/Subjects/Math/MathPage";
import SciencePage from "../pages/Subjects/Science/SciencePage";

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
    component: MathPage
  },
  {
    name: "science",
    path: "/science",
    component: SciencePage
  },
  {
    name: "history",
    path: "/history",
    component: HistoryPage
  },
  {
    name: "computer",
    path: "/computer",
    component: ComputerPage
  }
];
