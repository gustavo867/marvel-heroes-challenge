import React from "react";
import { Heroes } from "../../assets/apllicationTypes";

import * as S from "./styles";

import age from "../../assets/icons/age.png";
import weight from "../../assets/icons/weight.png";
import height from "../../assets/icons/height.png";
import universe from "../../assets/icons/universe.png";

interface Props {
  hero: Heroes;
}

const Caracteristics: React.FC<Props> = ({ hero }) => {
  function transformAge(birth: string) {
    const age = 2020 - Number(birth);

    return age;
  }

  return (
    <S.CaracteristicsContainer>
      <S.Caracteristic>
        <S.CaracteristicImage source={age} resizeMode="contain" />
        <S.CaracteristicText>
          {transformAge(hero.caracteristics.birth)} anos
        </S.CaracteristicText>
      </S.Caracteristic>
      <S.Caracteristic>
        <S.CaracteristicImage source={weight} resizeMode="contain" />
        <S.CaracteristicText>
          {hero.caracteristics.weight.value}
          {hero.caracteristics.weight.unity}
        </S.CaracteristicText>
      </S.Caracteristic>
      <S.Caracteristic>
        <S.CaracteristicImage source={height} resizeMode="contain" />
        <S.CaracteristicText>
          {hero.caracteristics.height.value}0{" "}
          {hero.caracteristics.height.unity === "meters" ? "m" : ""}
        </S.CaracteristicText>
      </S.Caracteristic>
      <S.Caracteristic>
        <S.CaracteristicImage source={universe} resizeMode="contain" />
        <S.CaracteristicText>
          {hero.caracteristics.universe}
        </S.CaracteristicText>
      </S.Caracteristic>
    </S.CaracteristicsContainer>
  );
};

export default Caracteristics;
