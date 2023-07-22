import 'dotenv/config'

export const config = {
  appKey: process.env.CONSUMER_KEY,
  appSecret: process.env.CONSUMER_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
}
