import React from "react";
import Avatar from "../Avatar/index";
import {
  PowerIcon,
  UserGreeting,
  UserInfoWrapper,
  UserWrapper,
  UserName,
  AvatarWrapper,
  UserGreetingWrapper,
  PowerIconWrapper,
} from "./styles";

const Header: React.FC = () => {
  return (
    <UserWrapper>
      <UserInfoWrapper>
        <Avatar uriPhoto="https://github.com/rafaellessa.png" />
        <AvatarWrapper />
        <UserGreetingWrapper>
          <UserGreeting>Olá, </UserGreeting>
          <UserName>Rafael</UserName>
        </UserGreetingWrapper>
      </UserInfoWrapper>
      <PowerIconWrapper>
        <PowerIcon name="power" />
      </PowerIconWrapper>
    </UserWrapper>
  );
};

export default Header;
