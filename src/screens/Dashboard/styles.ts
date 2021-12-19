import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-left: 24px;
  padding-right: 24px;
  height: ${RFPercentage(42)}px;
`;
