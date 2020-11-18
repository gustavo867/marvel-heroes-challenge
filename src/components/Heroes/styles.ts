import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const HeroesTitleContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20px;
`;

export const HeroesTitle = styled.Text`
  color: #f2264b;
  font-size: 18px;
  font-family: "Gilroy_Bold";
`;

export const HeroesList = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
`;

export const SmallText = styled.Text`
  color: #b7b7c8;
  font-size: 14px;
  font-family: "Gilroy_Medium";
`;
