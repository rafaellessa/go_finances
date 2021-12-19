import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.View``;
export const UserGreetingWrapper = styled.View`
  margin-left: ${RFValue(15)}px;
`;

export const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const PowerIconWrapper = styled(TouchableOpacity)``;

export const PowerIcon = styled(Feather).attrs({})`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;
