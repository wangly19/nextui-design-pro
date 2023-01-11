import { Button, Grid, Row } from "@nextui-org/react";
import { Google, Github, Twitter, FaceBook } from "icons";

export const OtherSignInPlatform = () => {
  return (
    <Row css={{gap: '$8', mt: '$8'}} align="center" justify="center" wrap="wrap" >
      <Button flat auto icon={<Google />} color="primary" />
      <Button flat auto icon={<Github />} color="primary" />
      <Button flat auto icon={<Twitter />} color="primary" />
      <Button flat auto icon={<FaceBook />} color="primary" />
    </Row>
    
  );
};
