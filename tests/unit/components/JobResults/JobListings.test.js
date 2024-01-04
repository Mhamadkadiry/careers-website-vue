import { render, screen } from '@testing-library/vue'
import axios from 'axios'
import { RouterLinkStub } from '@vue/test-utils'

import JobListings from '@/components/JobResults/JobListings.vue'
import { expect, it } from 'vitest'

vi.mock('axios')

describe('JobListings', () => {
  const createRoute = (queryParams) => ({
    query: {
      page: '5',
      ...queryParams
    }
  })
  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    })
  }
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] })
    const $route = createRoute()
    renderJobListings($route)
    expect(axios.get).toHaveBeenCalled('http://myfakeapi.com/jobs')
  })

  it('displays maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    const $route = createRoute({ page: '1' })
    renderJobListings($route)
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })

  describe('when params exlude page number', () => {
    it('displays page number 1', () => {
      const queryParams = {
        page: undefined
      }
      const $route = createRoute(queryParams)

      renderJobListings($route)
      expect(screen.getByText('Page 1')).toBeInTheDocument()
    })
  })

  describe('when params include page number', () => {
    it('displays page number', () => {
      const queryParams = { page: '3' }
      const $route = createRoute(queryParams)
      renderJobListings($route)
      expect(screen.getByText('Page 3')).toBeInTheDocument()
    })
  })
  describe('when user is on the first page of results', () => {
    it("does not display the 'previous page' button", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)
      renderJobListings($route)
      await screen.findAllByRole('listitem')
      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).not.toBeInTheDocument()
    })

    it('shows link to next page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)
      renderJobListings($route)
      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      screen.debug()
      expect(nextLink).toBeInTheDocument()
    })
  })
  describe('when user is on the last page of results', () => {
    it("does not display the 'next page' button", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)
      renderJobListings($route)
      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).not.toBeInTheDocument()
    })

    it('shows link to previous page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)
      renderJobListings($route)
      await screen.findAllByRole('listitem')
      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).toBeInTheDocument()
    })
  })
})