export default defineEventHandler(async (event) => {
  const { uid } = getQuery(event)
  if (!uid) return { error: 'Missing uid' }
  try {
    return await $fetch(`https://enka.network/api/hsr/uid/${uid}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    })
  } catch (error: any) {
    return { error: true, message: error.message, statusCode: error.statusCode }
  }
})