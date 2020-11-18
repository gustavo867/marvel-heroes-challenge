import React from "react";
import { LogBox } from "react-native";
import { Heroes } from "../../assets/apllicationTypes";

import * as S from "./styles";

interface Props {
  item: Heroes;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <S.Container activeOpacity={0.7} delayPressIn={3} delayPressOut={10}>
      <S.Image source={item.imagePath} />
      <S.SmallText>{item.alterEgo}</S.SmallText>
      <S.Title>{item.name}</S.Title>
    </S.Container>
  );
};

export default Card;
