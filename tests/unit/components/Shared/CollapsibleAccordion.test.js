import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

describe('CollapsibleAccordion', () => {
  it('renders child content', async () => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      props: {
        title: 'My Category'
      },
      slots: {
        default: '<h3>Test Content</h3>'
      }
    })
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument()
    const button = screen.getByRole('button', { name: /My Category/i })
    await userEvent.click(button)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
  describe('when parent does not provide custom child content', () => {
    it('renders default child content', async () => {
      render(CollapsibleAccordion, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        props: {
          title: 'My Category'
        }
      })
      const button = screen.getByRole('button', { name: /My Category/i })
      await userEvent.click(button)
      expect(screen.getByText('Forgot to type something here!')).toBeInTheDocument()
    })
  })
})
