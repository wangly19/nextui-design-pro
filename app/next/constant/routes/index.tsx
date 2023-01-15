import { Home } from 'react-iconly'
import { componentsRoute } from './components'

export interface Route {
  /** @description routePath */
  path: string;

  /** @description routeKey */
  name: string;
  meta?: {
    /** @description showTitle */
    title?: string;

    /** @description showIcon */
    icon?: React.ReactNode;
    description?: string;
  };
  children?: Route[];
}

/** NavigationBar MenuData  */
export const navMenuRoutes: Route[] = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home",
      icon: <Home/>
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: <Home/>
    },
  },
  componentsRoute,
  {
    path: "https://github.com/wangly19/nextui-design-pro/releases",
    name: "Changelog",
    meta: {
      title: "Changelog",
      icon: <Home/>
    },
  },
];
