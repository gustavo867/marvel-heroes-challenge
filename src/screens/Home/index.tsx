import React, { useCallback, useState } from "react";
import Header from "../../components/Header";
import * as S from "./styles";

import heroIcon from "../../assets/icons/hero.png";
import villainIcon from "../../assets/icons/villain.png";
import antiHeroIcon from "../../assets/icons/antihero.png";
import alienIcon from "../../assets/icons/alien.png";
import humanIcon from "../../assets/icons/human.png";
import { ImageSourcePropType } from "react-native";

import Data from "../../assets/data";
import Hero from "../../components/Heroes";

interface Category {
  id: number;
  imgPath: ImageSourcePropType;
  colors: string[];
  height: number;
  width: number;
  category: string;
}

const Home: React.FC = () => {
  const [select, setSelect] = useState<
    | "heroes"
    | "villains"
    | "antiHeroes"
    | "aliens"
    | "humans"
    | string
    | undefined
  >(undefined);

  const categories = [
    {
      id: 1,
      category: "heroes",
      imgPath: heroIcon,
      colors: ["#005BEA", "#00C6FB"],
      height: 56,
      width: 56,
    },
    {
      id: 2,
      category: "villains",
      imgPath: villainIcon,
      colors: ["#ED1D24", "#ED1F69"],
      height: 56,
      width: 56,
    },
    {
      id: 3,
      category: "antiHeroes",
      imgPath: antiHeroIcon,
      colors: ["#B224EF", "#7579FF"],
      height: 56,
      width: 56,
    },
    {
      id: 4,
      category: "aliens",
      imgPath: alienIcon,
      colors: ["#0BA360", "#3CBA92"],
      height: 56,
      width: 56,
    },
    {
      id: 5,
      category: "humans",
      imgPath: humanIcon,
      colors: ["#FF7EB3", "#FF758C"],
      height: 56,
      width: 56,
    },
  ];

  const onSelectCategory = useCallback(
    (
      category:
        | "heroes"
        | "villains"
        | "antiHeroes"
        | "aliens"
        | "humans"
        | string
    ) => {
      if (select === category) {
        setSelect(undefined);
        return;
      }
      setSelect(category);
    },
    [select]
  );

  console.log(select);

  const Item = (item: Category) => {
    return (
      <S.Button
        delayPressIn={1}
        activeOpacity={0.6}
        onPress={() => onSelectCategory(item.category)}
      >
        <S.CategoryContainer
          colors={item.colors}
          style={{
            width: item.width,
            height: item.height,
            borderRadius: item.height / 2,
            borderWidth: select === item.category ? 2 : 0,
            borderColor:
              select === item.category
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(255, 255, 255, 0.01)",
            elevation: 2,
          }}
        >
          <S.Logo source={item.imgPath} />
        </S.CategoryContainer>
      </S.Button>
    );
  };

  return (
    <S.Container>
      <S.Scroll>
        <Header />
        <S.TitleContainer>
          <S.SmallText>Bem vindo ao Marvel Heroes</S.SmallText>
          <S.Title>Escolha o seu personagem</S.Title>
        </S.TitleContainer>
        <S.CategoriesContainer>
          <S.CategoryList
            data={categories}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }: any) => <Item {...item} />}
            contentContainerStyle={{
              flexDirection: "row",
            }}
          />
        </S.CategoriesContainer>
        <S.HeroesContainer>
          {select ? (
            select === "heroes" && <Hero data={Data.heroes} title="Heróis" />
          ) : (
            <Hero data={Data.heroes} title="Heróis" />
          )}
          {select ? (
            select === "villains" && (
              <Hero data={Data.villains} title="Vilões" />
            )
          ) : (
            <Hero data={Data.villains} title="Vilões" />
          )}
          {select ? (
            select === "antiHeroes" && (
              <Hero data={Data.antiHeroes} title="Anti-heróis" />
            )
          ) : (
            <Hero data={Data.antiHeroes} title="Anti-heróis" />
          )}
          {select ? (
            select === "aliens" && (
              <Hero data={Data.aliens} title="Alienígenas" />
            )
          ) : (
            <Hero data={Data.aliens} title="Alienígenas" />
          )}
          {select ? (
            select === "humans" && <Hero data={Data.humans} title="Humanos" />
          ) : (
            <Hero data={Data.humans} title="Humanos" />
          )}

          {/* <Hero data={Data.heroes} title="Heróis" />
          <Hero data={Data.villains} title="Vilões" />
          <Hero data={Data.antiHeroes} title="Anti-heróis" />
          <Hero data={Data.aliens} title="Alienígenas" />
          <Hero data={Data.humans} title="Humanos" /> */}
        </S.HeroesContainer>
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
