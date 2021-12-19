import React from "react";

interface AvatarProps {
  uriPhoto: string;
}
import { Container } from "./styles";

const Avatar: React.FC<AvatarProps> = ({ uriPhoto }) => {
  return <Container source={{ uri: uriPhoto }} />;
};

export default Avatar;
