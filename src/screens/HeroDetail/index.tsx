import React, { useContext } from "react";

import { ImageSourcePropType, Text } from "react-native";
import { HeroContext } from "../../context/HeroContext";

import * as S from "./styles";

import Caracteristics from "../../components/Caracteristics";
import Abilitys from "../../components/Abilitys";

interface ItemProps {
  item: ImageSourcePropType;
}

const HeroDetail: React.FC = () => {
  const { hero } = useContext(HeroContext);

  if (!hero) {
    return <Text>Loading....</Text>;
  }

  const Item = ({ item }: ItemProps) => {
    return (
      <S.MovieContainer>
        <S.MovieImage source={item} resizeMode="cover" />
      </S.MovieContainer>
    );
  };

  return (
    <S.Container>
      <S.Scroll>
        <S.ImageContainer
          colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.95)"]}
        >
          <S.BackgroundImage source={hero.imagePath} resizeMode="cover" />
        </S.ImageContainer>
        <S.BottomContainer>
          <S.HeroTitleContainer>
            <S.HeroAlterEgo>{hero.alterEgo}</S.HeroAlterEgo>
            <S.HeroName>{hero.name}</S.HeroName>
          </S.HeroTitleContainer>
          <Caracteristics hero={hero} />
          <S.DescriptionContainer>
            <S.Description>{hero.biography}</S.Description>
          </S.DescriptionContainer>
          <Abilitys hero={hero} />
          <S.MoviesContainer>
            <S.MoviesTitle>Filmes</S.MoviesTitle>
            <S.MoviesList
              data={hero.movies}
              keyExtractor={(item: any, index: number) => index.toString()}
              renderItem={({ item }) => <Item item={item as any} />}
              contentContainerStyle={{
                flexDirection: "row",
              }}
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={false}
              bounces={false}
            />
          </S.MoviesContainer>
        </S.BottomContainer>
      </S.Scroll>
    </S.Container>
  );
};

export default HeroDetail;
