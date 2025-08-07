import { words } from "../data/words";

export function getRandomWord():string{
 const randomIndex = Math.floor(Math.random() * words.length);
 return words[randomIndex].toUpperCase();
}