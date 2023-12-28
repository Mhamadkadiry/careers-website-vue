import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in the list', () => {
    const list = ['a', 'b', 'c']
    const element = 'b'
    const nextElement = nextElementInList(list, element)
    expect(nextElement).toBe('c')
  })

  describe('when element is the last element in the list', () => {
    it('returns the first element in the list', () => {
      const list = ['a', 'b', 'c']
      const element = 'c'
      const nextElement = nextElementInList(list, element)
      expect(nextElement).toBe('a')
    })
  })
})
