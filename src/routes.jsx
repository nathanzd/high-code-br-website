import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Início",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Projetos",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sobre nós",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Demonstrações",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Treinamentos",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
