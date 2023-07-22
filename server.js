import { TwitterApi } from 'twitter-api-v2';
import { config } from "./config.js";
import { getRandomAffirmation } from './random_affirmation.js'

const twitterClient = new TwitterApi(config);

const affirmation = getRandomAffirmation();

await twitterClient.v2.tweet(affirmation);
