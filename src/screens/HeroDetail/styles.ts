import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const Scroll = styled.ScrollView`
  flex-grow: 0;
`;

export const ImageContainer = styled(LinearGradient)`
  width: ${width}px;
  height: ${height * 0.7}px;
  position: absolute;
`;

export const BottomContainer = styled.View`
  padding-horizontal: 20px;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0px;
  height: ${height * 0.7}px;
  width: ${width}px;
  z-index: -1;
  opacity: 0.92;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeroTitleContainer = styled.View`
  margin-top: ${height * 0.4}px;
`;

export const HeroName = styled.Text`
  font-size: 40px;
  font-family: "Gilroy_Heavy";
  color: #ffffff;
  width: 60%;
`;

export const HeroAlterEgo = styled.Text`
  font-size: 16px;
  font-family: "Gilroy_Medium";
  color: #ffffff;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const Description = styled.Text`
  text-align: left;
  font-size: 14px;
  font-family: "Gilroy_Medium";
  color: #ffffff;
  line-height: 18px;
  opacity: 0.78;
`;

export const MoviesContainer = styled.View`
  margin-top: 22px;
  margin-bottom: 20px;
`;

export const MoviesTitle = styled.Text`
  font-size: 18px;
  font-family: "Gilroy_Bold";
  color: #ffff;
`;

export const MoviesList = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
`;

export const MovieContainer = styled.View`
  width: 280px;
  height: 460px;
  border-radius: 18px;
  margin-right: 16px;
  overflow: hidden;
  margin-top: 10px;
`;

export const MovieImage = styled.Image`
  width: 280px;
  height: 460px;
  border-radius: 18px;
`;
