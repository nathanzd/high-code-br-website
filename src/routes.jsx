import { Home, Profile, SignIn, SignUp, Projects, AboutUS, CoomingSoon } from "@/pages";

export const routes = [
  {
    name: "Início",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Projetos",
    path: "/projects",
    element: <Projects />,
  },
  {
    name: "Sobre nós",
    path: "/about",
    element: <AboutUS />,
  },
  {
    name: "Demonstrações",
    path: "/soon",
    element: <CoomingSoon />,
  },
  {
    name: "Treinamentos",
    path: "/soon",
    element:  <CoomingSoon />,
  },
];

/* {
    name: "Treinamentos",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element:  <CoomingSoon />,
  },*/

export default routes;
