import { Navbar } from "@nextui-org/react";
import { navMenuRoutes } from "constant/routes";
import { CollapseNavLink } from "./collapse";
import { useRouter } from "next/router";

export const NavBarMenu = () => {
  const router = useRouter();

  return (
    <Navbar.Content hideIn="xs" variant="highlight">
      {navMenuRoutes.map((route) => {
        if (route.children && route.children?.length > 0) {
          return <CollapseNavLink route={route} key={route.name} />;
        } else {
          return (
            <Navbar.Link
              key={route.name}
              href={route.path}
              isActive={router.pathname === route.path}
            >
              {route.meta?.title}
            </Navbar.Link>
          );
        }
      })}
    </Navbar.Content>
  );
};
