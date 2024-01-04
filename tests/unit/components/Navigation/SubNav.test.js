import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/Navigation/SubNav.vue'
import { describe, expect } from 'vitest'

describe('TheSubNav', () => {
  const renderSubNav = (routeName) => {
    render(SubNav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  describe('when user is on jobs page', () => {
    it('renders the subnav', () => {
      renderSubNav('JobResults')
      const jobCount = screen.getByText(1653)
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does not render the subnav', () => {
      renderSubNav('notJobResults')
      const jobCount = screen.queryByText(1653)
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
