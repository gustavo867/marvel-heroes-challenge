import React from "react";

import { Text } from "react-native";

import * as S from "./styles";

import menu from "../../assets/icons/menu.png";
import marvel from "../../assets/icons/marvel.png";
import search from "../../assets/icons/search.png";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Img source={menu} />
      <S.MarvelLogo source={marvel} resizeMode="contain" />
      <S.Img source={search} />
    </S.Container>
  );
};

export default Header;
