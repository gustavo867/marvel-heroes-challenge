import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: "Gilroy_Bold";
`;

export const AbilitysContainer = styled.View``;

export const AbilityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const AbilityText = styled.Text`
  margin-right: 30px;
  font-size: 12px;
  font-family: "Gilroy_Regular";
  color: #ffffff;
  width: 85px;
`;

export const Bar = styled(LinearGradient)`
  width: ${width * 0.6}px;
  height: 12px;
`;
