import {
  ChListResponse,
  CharacterType,
  Location,
  LocationDetails,
} from "./types";

export async function getCharacters(): Promise<ChListResponse> {
  const chsss = await fetch("https://rickandmortyapi.com/api/character").then(
    (dt) => dt.json(),
  );

  return chsss;
}

export async function getCharacter(id: string): Promise<CharacterType> {
  const chsss = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  ).then((dt) => dt.json());

  return chsss;
}

export async function getLocation(url: string): Promise<LocationDetails> {
  const chsss = await fetch(url).then((dt) => dt.json());

  return chsss;
}
