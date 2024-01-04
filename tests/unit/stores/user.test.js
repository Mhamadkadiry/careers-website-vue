import { createPinia, setActivePinia } from 'pinia'

import { useUserStore } from '@/stores/user'

describe('state', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('keeps track of if user is logged in', () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(false)
  })
})

describe('actions', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  describe('loginUser', () => {
    it('sets isLoggedIn to true', () => {
      const store = useUserStore()
      store.loginUser()
      expect(store.isLoggedIn).toBe(true)
    })
  })
  describe('logoutUser', () => {
    it('sets isLoggedIn to false', () => {
      const store = useUserStore()
      store.logoutUser()
      expect(store.isLoggedIn).toBe(false)
    })
  })
})
