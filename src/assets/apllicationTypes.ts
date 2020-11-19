import { ImageSourcePropType } from "react-native";

export interface Caracteristics {
  birth: string;
  weight: {
    value: number;
    unity: string;
  };
  height: {
    value: number;
    unity: string;
  };
  universe: string;
}

export interface Abilities {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface Heroes {
  name: string;
  alterEgo: string;
  imagePath: ImageSourcePropType;
  biography: string;
  caracteristics: Caracteristics;
  abilities: Abilities;
  movies: ImageSourcePropType[];
}

export interface Data {
  heroes: Heroes[];
  villains: Heroes[];
  antiHeroes: Heroes[];
  aliens: Heroes[];
  humans: Heroes[];
}
