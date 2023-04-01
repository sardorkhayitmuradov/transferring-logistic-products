import { Clients, Home, Products } from "../Pages";
import { ReactElement } from "react";

interface RouteProps {
  path: string;
  index: boolean;
  component: ReactElement;
}

export const routes: RouteProps[] = [
  {
    path: '/',
    index: true,
    component: <Home />,
  },
  {
    path: '/clients',
    index: true,
    component: <Clients />,
  },
  {
    path: '/products',
    index: true,
    component: <Products />,
  }
];