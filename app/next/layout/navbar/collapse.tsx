import * as React from "react";
import { Avatar, Dropdown } from "@nextui-org/react";
import { Route } from "constant/routes";
import { useRouter } from "next/router";

export interface CollapseNavLinkProps {
  route: Route;
}

export const CollapseNavLink: React.FC<CollapseNavLinkProps> = (props) => {
  const router = useRouter();

  const { pathname } = router;
  const { children = [], meta, path } = props.route;

  const handleRouteAction = (v: React.Key) => {
    if (typeof v !== "string") {
      console.warn(`Current route path is not a string.`);
      return void 0;
    }
    /** has url? */
    if (/^(http|https)/.test(v)) {
      window.open(v);
    } else {
      router.push(v);
    }
  };

  return (
    <Dropdown isBordered>
      <Dropdown.Button
        auto
        light={!pathname.includes(path)}
        flat={pathname.includes(path)}
        css={{
          fs: '$md',
          fontWeight: !pathname.includes(path) ? '$normal' : '$medium'
        }}
      >
        {meta?.title}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="ACME features"
        selectedKeys={[pathname]}
        css={{
          $$dropdownItemHeight: "50px",
        }}
        onAction={handleRouteAction}
      >
        {children.map((route) => {
          const iKey = /^(http|https)/.test(route.path)
            ? route.path
            : path + route.path;
          return (
            <Dropdown.Item
              key={iKey}
              showFullDescription
              description={route.meta?.description}
              icon={
                route.meta?.icon ? (
                  <Avatar squared icon={route.meta?.icon} />
                ) : null
              }
            >
              {route.meta?.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
