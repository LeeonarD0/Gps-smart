const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error('API KEY INVALID !')
}
