import axios from 'axios'

import getJobs from '@/apis/getJobs'

vi.mock('axios')

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, title: 'Software Engineer' },
        { id: 2, title: 'Product Manager' }
      ]
    })
  })
  it('fetches jobs that candicates can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs')
  })

  it('extracts jobs from response', async () => {
    const jobs = await getJobs()
    expect(jobs).toEqual([
      { id: 1, title: 'Software Engineer' },
      { id: 2, title: 'Product Manager' }
    ])
  })
})
