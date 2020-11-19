import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Heroes } from "../../assets/apllicationTypes";
import { HeroContext } from "../../context/HeroContext";

import * as S from "./styles";

interface Props {
  item: Heroes;
}

const Card: React.FC<Props> = ({ item }) => {
  const { handleCurrentHero } = useContext(HeroContext);

  const { navigate } = useNavigation();

  async function handleNavigateToHeroDetail(item: Heroes) {
    await handleCurrentHero(item);
    navigate("HeroDetail");
  }

  return (
    <S.Container
      activeOpacity={0.7}
      delayPressIn={3}
      delayPressOut={10}
      onPress={() => handleNavigateToHeroDetail(item)}
    >
      <S.Image source={item.imagePath} />
      <S.SmallText>{item.alterEgo}</S.SmallText>
      <S.Title>{item.name}</S.Title>
    </S.Container>
  );
};

export default Card;
