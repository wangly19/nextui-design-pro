import { Navbar, Text } from "@nextui-org/react";
import { AvatarBar } from "../avatar-bar";
import { NavBarMenu } from "./menu";
import { Brand } from './brand'

export default function () {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Brand/>
      </Navbar.Brand>
      <NavBarMenu />
      <AvatarBar />
    </Navbar>
  );
}
