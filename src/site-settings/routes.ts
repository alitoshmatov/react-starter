import { Home } from "pages/home/home";

interface Route {
  title: string;
  path: string;
  component?: React.FC;
}

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
    component: Home,
  },
];
