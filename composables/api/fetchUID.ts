import { ref } from 'vue'

export function useEnkaFetch(uid: string) {
  const data = ref(null)
  const error = ref(null)

  async function fetchData() {
    try {
      const res = await fetch(`/api/getuid?uid=${uid}`)
      data.value = await res.json()
    } catch (err: any) {
      error.value = err
    }
  }

  fetchData()
  return { data, error }
}