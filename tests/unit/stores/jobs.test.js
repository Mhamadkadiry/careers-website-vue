import { createPinia, setActivePinia } from 'pinia'

import { useJobsStore } from '@/stores/jobs'
import axios from 'axios'
vi.mock('axios')

describe('state', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  describe('FETCH_JOBS', () => {
    it('fetches jobs from the API and store it', async () => {
      axios.get.mockResolvedValue({
        data: ['Job 1', 'Job 2']
      })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(['Job 1', 'Job 2'])
    })
  })
})
