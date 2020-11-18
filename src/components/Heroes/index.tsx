import React from "react";
import { Heroes } from "../../assets/apllicationTypes";
import Card from "../Card";

import * as S from "./styles";

interface Props {
  data: Heroes[];
  title: string;
}

const Hero: React.FC<Props> = ({ data, title }) => {
  return (
    <S.Container>
      <S.HeroesTitleContainer>
        <S.HeroesTitle>{title}</S.HeroesTitle>
        <S.SmallText>Ver tudo</S.SmallText>
      </S.HeroesTitleContainer>
      <S.HeroesList
        data={data}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={({ item }: any) => <Card item={item} />}
        contentContainerStyle={{
          flexDirection: "row",
        }}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default Hero;
