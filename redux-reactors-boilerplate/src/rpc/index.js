export default {
  getForecast: async ({name}, ctx) => {
    return {greeting: 'hello ${name}'}
  }
}