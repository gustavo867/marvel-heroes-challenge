import React, { createContext, useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import { Abilities, Caracteristics } from "../assets/apllicationTypes";

interface HeroData {
  name: string;
  alterEgo: string;
  imagePath: ImageSourcePropType;
  biography: string;
  caracteristics: Caracteristics;
  abilities: Abilities;
  movies: ImageSourcePropType[];
}

interface HeroContextData {
  hero: HeroData | undefined;
  handleCurrentHero(item: HeroData): Promise<void>;
}

const HeroContext = createContext<HeroContextData>({} as HeroContextData);

const HeroProvider: React.FC = ({ children }) => {
  const [hero, setHero] = useState<HeroData | undefined>();

  async function handleCurrentHero(item: HeroData) {
    await setHero(item);
    return;
  }

  return (
    <HeroContext.Provider value={{ hero, handleCurrentHero }}>
      {children}
    </HeroContext.Provider>
  );
};

export { HeroContext, HeroProvider };
