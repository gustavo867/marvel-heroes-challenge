import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 20px;
`;

export const TitleContainer = styled.View`
  margin-top: 20px;
  padding-left: 24px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SmallText = styled.Text`
  color: #b7b7c8;
  font-size: 14px;
  font-family: "Gilroy_SemiBold";
`;

export const Title = styled.Text`
  color: #313140;
  font-size: 32px;
  font-family: "Gilroy_Heavy";
`;

export const CategoriesContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const CategoryList = styled.FlatList`
  flex-grow: 0;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const CategoryContainer = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  margin-horizontal: 10px;
`;

export const Logo = styled.Image``;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeroesContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView`
  flex-grow: 0;
  margin-top: 18px;
  margin-bottom: 10px;
`;

export const HeroesTitleContainer = styled.View`
  padding-horizontal: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const HeroesTitle = styled.Text`
  color: #f2264b;
  font-size: 18px;
  font-family: "Gilroy_Bold";
`;

export const HeroesList = styled.FlatList`
  flex-grow: 0;
`;
