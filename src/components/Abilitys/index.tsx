import React from "react";
import { Heroes } from "../../assets/apllicationTypes";

import * as S from "./styles";

interface Props {
  hero: Heroes;
}

const Abilitys: React.FC<Props> = ({ hero }) => {
  function getColors(abilityNumber: number) {
    return abilityNumber < 50
      ? ["#f2709c", "#ff9472"]
      : ["#00FF00", "rgba(255, 255, 255, 0.9)"];
  }

  return (
    <S.Container>
      <S.Title>Habilidades</S.Title>
      <S.AbilitysContainer>
        <S.AbilityContainer>
          <S.AbilityText>Força</S.AbilityText>
          <S.Bar
            colors={getColors(hero.abilities.force)}
            locations={[0.3, 0.9]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.9, y: 0.2 }}
          />
        </S.AbilityContainer>
        <S.AbilityContainer>
          <S.AbilityText>Inteligência</S.AbilityText>
          <S.Bar
            colors={getColors(hero.abilities.intelligence)}
            locations={[0.3, 0.9]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.9, y: 0.2 }}
          />
        </S.AbilityContainer>
        <S.AbilityContainer>
          <S.AbilityText>Agilidade</S.AbilityText>
          <S.Bar
            colors={getColors(hero.abilities.agility)}
            locations={[0.3, 0.9]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.9, y: 0.2 }}
          />
        </S.AbilityContainer>
        <S.AbilityContainer>
          <S.AbilityText>Resistência</S.AbilityText>
          <S.Bar
            colors={getColors(hero.abilities.endurance)}
            locations={[0.3, 0.9]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.9, y: 0.2 }}
          />
        </S.AbilityContainer>
        <S.AbilityContainer>
          <S.AbilityText>Velocidade</S.AbilityText>
          <S.Bar
            colors={getColors(hero.abilities.velocity)}
            locations={[0.3, 0.9]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.9, y: 0.2 }}
          />
        </S.AbilityContainer>
      </S.AbilitysContainer>
    </S.Container>
  );
};

export default Abilitys;
