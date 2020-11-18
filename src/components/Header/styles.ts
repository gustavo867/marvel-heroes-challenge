import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  height: 65px;
  width: ${width}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20px;
`;

export const Img = styled.Image`
  width: 28px;
  height: 28px;
`;

export const MarvelLogo = styled.Image`
  width: 100px;
  height: 50px;
`;
