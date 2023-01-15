import { Home } from "react-iconly";

export const componentsRoute = {
  path: "/components",
  name: "Components",
  meta: {
    title: "Components",
    icon: <Home/>
  },
  children: [
    {
      path: "/pro-table",
      name: "ProTable",
      meta: {
        title: "ProTable",
        description: 'Standardized form example.',
        icon: <Home/>
      },
    },
    {
      path: 'https://github.com/wangly19/nextui-design-pro/releases',
      name: 'Release',
      meta: {
        title: 'Release'
      }
    }
  ]
}