import { affirmations } from './affirmations.js'

export function getRandomAffirmation() {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}
